'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapViewProps {
  customerLocation: string;
  vehicleLocation: string;
  isEnRoute: boolean;
  estimatedArrival?: string;
}

export default function MapView({ customerLocation, vehicleLocation, isEnRoute, estimatedArrival }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places']
    });

    const initMap = async () => {
      try {
        const google = await loader.load();
        const geocoder = new google.maps.Geocoder();

        if (!mapRef.current) return;

        // Default center (Uskvale area)
        const defaultCenter = { lat: 51.6088, lng: -2.9398 };

        const mapInstance = new google.maps.Map(mapRef.current, {
          center: defaultCenter,
          zoom: 12,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [{ "color": "#0f0f13" }]
            },
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9ca3af" }]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#0f0f13" }]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [{ "color": "#1f1f29" }]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#6b7280" }]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{ "color": "#18181b" }]
            },
            {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{ "color": "#27272a" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [{ "color": "#1f1f29" }]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9ca3af" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{ "color": "#4c1d95" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{ "color": "#2e1065" }]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [{ "color": "#18181b" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{ "color": "#0f0f13" }]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#6b7280" }]
            }
          ],
          gestureHandling: 'greedy',
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        });

        // Geocode customer location
        geocoder.geocode(
          { address: customerLocation },
          (
            results: google.maps.GeocoderResult[] | null,
            status: google.maps.GeocoderStatus
          ) => {
            if (status === 'OK' && results?.[0]) {
              const customerPos = results[0].geometry.location;

              // Add customer marker with purple theme
              const customerMarker = new google.maps.Marker({
                position: customerPos,
                map: mapInstance,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: "#9333ea",
                  fillOpacity: 1,
                  strokeColor: "#4c1d95",
                  strokeWeight: 2,
                },
                title: 'Your Location',
                animation: google.maps.Animation.DROP
              });

              // Add customer info window with styled content
              const customerInfo = new google.maps.InfoWindow({
                content: '<div class="p-2 text-gray-900"><strong>Your Location</strong></div>'
              });

              google.maps.event.addListener(customerMarker, 'click', () => {
                customerInfo.open(mapInstance, customerMarker);
              });

              // If vehicle is en route, add vehicle marker
              if (isEnRoute && vehicleLocation) {
                geocoder.geocode(
                  { address: vehicleLocation },
                  (
                    vResults: google.maps.GeocoderResult[] | null,
                    vStatus: google.maps.GeocoderStatus
                  ) => {
                    if (vStatus === 'OK' && vResults?.[0]) {
                      const vehiclePos = vResults[0].geometry.location;

                      // Add vehicle marker with purple theme
                      const vehicleMarker = new google.maps.Marker({
                        position: vehiclePos,
                        map: mapInstance,
                        icon: {
                          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                          scale: 6,
                          fillColor: "#9333ea",
                          fillOpacity: 1,
                          strokeColor: "#4c1d95",
                          strokeWeight: 2,
                          rotation: 45
                        },
                        title: 'Recovery Vehicle',
                        animation: google.maps.Animation.DROP
                      });

                      // Add vehicle info window with styled content
                      const vehicleInfo = new google.maps.InfoWindow({
                        content: `<div class="p-2 text-gray-900"><strong>Recovery Vehicle</strong><br/>ETA: ${estimatedArrival || 'Calculating...'}</div>`
                      });

                      google.maps.event.addListener(vehicleMarker, 'click', () => {
                        vehicleInfo.open(mapInstance, vehicleMarker);
                      });

                      // Draw route between points with purple theme
                      const directionsService = new google.maps.DirectionsService();
                      const directionsRenderer = new google.maps.DirectionsRenderer({
                        map: mapInstance,
                        suppressMarkers: true,
                        polylineOptions: {
                          strokeColor: '#9333ea',
                          strokeWeight: 4,
                          strokeOpacity: 0.8
                        }
                      });

                      directionsService.route(
                        {
                          origin: vehiclePos,
                          destination: customerPos,
                          travelMode: google.maps.TravelMode.DRIVING
                        },
                        (
                          response: google.maps.DirectionsResult | null,
                          dStatus: google.maps.DirectionsStatus
                        ) => {
                          if (dStatus === 'OK' && response) {
                            directionsRenderer.setDirections(response);

                            // Fit bounds with padding for mobile
                            const bounds = new google.maps.LatLngBounds();
                            bounds.extend(vehiclePos);
                            bounds.extend(customerPos);
                            mapInstance.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
                          }
                        }
                      );
                    }
                  }
                );
              } else {
                // If not en route, just center on customer location with appropriate zoom
                mapInstance.setCenter(customerPos);
                mapInstance.setZoom(15);
              }
            }
          }
        );

      } catch (error) {
        console.error('Map error:', error);
        setError('Unable to load map. Please check your connection and try again.');
      }
    };

    initMap();
  }, [customerLocation, vehicleLocation, isEnRoute]);

  if (error) {
    return (
      <div className="bg-gray-900 rounded-lg h-64 flex items-center justify-center p-4 text-center">
        <div>
          <p className="text-red-400 font-display mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden touch-pan-y" />
  );
} 
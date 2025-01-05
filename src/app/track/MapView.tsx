'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapViewProps {
  customerLocation: string;
  vehicleLocation: string;
  isEnRoute: boolean;
}

export default function MapView({ customerLocation, vehicleLocation, isEnRoute }: MapViewProps) {
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
              "stylers": [{"color": "#f5f5f5"}]
            },
            {
              "elementType": "labels.icon",
              "stylers": [{"visibility": "off"}]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#616161"}]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{"color": "#f5f5f5"}]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#bdbdbd"}]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{"color": "#eeeeee"}]
            },
            {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{"color": "#e5e5e5"}]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{"color": "#ffffff"}]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#757575"}]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{"color": "#dadada"}]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#616161"}]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#9e9e9e"}]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [{"color": "#e5e5e5"}]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [{"color": "#eeeeee"}]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"color": "#e9e9e9"}]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#9e9e9e"}]
            }
          ]
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
              
              // Add customer marker
              new google.maps.Marker({
                position: customerPos,
                map: mapInstance,
                icon: {
                  url: '/customer-pin.svg',
                  scaledSize: new google.maps.Size(48, 48),
                  anchor: new google.maps.Point(24, 40),
                },
                title: 'Your Location'
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
                      
                      // Add vehicle marker
                      new google.maps.Marker({
                        position: vehiclePos,
                        map: mapInstance,
                        icon: {
                          url: '/logo.png',
                          scaledSize: new google.maps.Size(40, 40),
                          anchor: new google.maps.Point(20, 20),
                        },
                        title: 'Recovery Vehicle'
                      });

                      // Draw route between points
                      const directionsService = new google.maps.DirectionsService();
                      const directionsRenderer = new google.maps.DirectionsRenderer({
                        map: mapInstance,
                        suppressMarkers: true,
                        polylineOptions: {
                          strokeColor: '#000000',
                          strokeWeight: 4
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
                            
                            // Fit bounds to show both markers
                            const bounds = new google.maps.LatLngBounds();
                            bounds.extend(vehiclePos);
                            bounds.extend(customerPos);
                            mapInstance.fitBounds(bounds);
                          }
                        }
                      );
                    }
                  }
                );
              } else {
                // If not en route, just center on customer location
                mapInstance.setCenter(customerPos);
                mapInstance.setZoom(14);
              }
            }
          }
        );

      } catch (err) {
        setError('Failed to load map. Please try again later.');
      }
    };

    initMap();
  }, [customerLocation, vehicleLocation, isEnRoute]);

  if (error) {
    return (
      <div className="bg-red-50 rounded-lg h-64 flex items-center justify-center">
        <p className="text-red-600 font-display">{error}</p>
      </div>
    );
  }

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />
  );
} 
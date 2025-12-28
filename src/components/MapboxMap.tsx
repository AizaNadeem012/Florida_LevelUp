import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface MapboxMapProps {
  center: [number, number];
  zoom?: number;
  markerTitle?: string;
  height?: string;
}

const MapboxMap = ({ center, zoom = 12, markerTitle, height = '400px' }: MapboxMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem('mapbox_token') || '');
  const [tempKey, setTempKey] = useState('');
  const [error, setError] = useState('');

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: zoom,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add marker
      if (markerTitle) {
        new mapboxgl.Marker({ color: '#20B2AA' })
          .setLngLat(center)
          .setPopup(new mapboxgl.Popup().setHTML(`<strong>${markerTitle}</strong>`))
          .addTo(map.current);
      }

      setError('');
    } catch (err) {
      setError('Failed to initialize map. Please check your API key.');
    }
  };

  const handleSaveToken = () => {
    if (tempKey.trim()) {
      localStorage.setItem('mapbox_token', tempKey);
      setApiKey(tempKey);
      setError('');
    }
  };

  useEffect(() => {
    if (apiKey) {
      initializeMap(apiKey);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [apiKey, center, zoom]);

  if (!apiKey) {
    return (
      <div className="border rounded-lg p-6 bg-muted/50" style={{ height }}>
        <Alert className="mb-4">
          <AlertDescription>
            To display the map, please enter your Mapbox public token. Get one free at{' '}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              mapbox.com
            </a>
          </AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Mapbox public token..."
            value={tempKey}
            onChange={(e) => setTempKey(e.target.value)}
          />
          <Button onClick={handleSaveToken} className="btn-primary">
            Save Token
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height }}>
      {error && (
        <Alert className="absolute top-4 left-4 right-4 z-10 bg-destructive text-destructive-foreground">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapboxMap;

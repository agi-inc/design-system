'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardTitle,
} from '@multion/ui';
import { AlertCircle, Terminal } from 'lucide-react';

const AlertsExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <CardTitle>Error</CardTitle>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </CardContent>
      </div>
      <div>
        <CardTitle>Default</CardTitle>
        <CardContent>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </CardContent>
      </div>
    </div>
  );
};

export default AlertsExample;

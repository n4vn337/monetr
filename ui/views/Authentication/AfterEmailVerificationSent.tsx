import { Button } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthenticationLogo from 'views/Authentication/components/AuthenticationLogo';

const AfterEmailVerificationSent = (): JSX.Element => (
  <div className="h-full overflow-y-auto">
    <div className="flex justify-center items-center w-full h-full max-h-full">
      <div className="lg:w-1/4 p-10 max-w-screen-sm sm:p-0 mb-10">
        <AuthenticationLogo/>
        <h1 className="text-center">
          A verification message has been sent to your email address, please verify your email.
        </h1>
        <div className="mt-5 w-full flex justify-center">
          <Button
            to="/login"
            component={ RouterLink }
          >
            Return To Login
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default AfterEmailVerificationSent;
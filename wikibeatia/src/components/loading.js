import React, { useEffect } from "react";
import {Spinner} from '@inkjs/ui';


export const Loading = ({ handleLoadingFinished }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
			handleLoadingFinished();
		}, 400);

		return () => clearTimeout(timer);
  }, []);

  return (<Spinner label='Loading...' type='orangeBluePulse' />);
}
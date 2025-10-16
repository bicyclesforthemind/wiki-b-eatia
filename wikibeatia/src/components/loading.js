import React, { useEffect } from "react";
import {Spinner} from '@inkjs/ui';


export const Loading = ({ label, type = "orangeBluePulse", handleLoadingFinished }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
			handleLoadingFinished();
		}, 400);

		return () => clearTimeout(timer);
  }, []);

  return (<Spinner label={label} type={type} />);
}
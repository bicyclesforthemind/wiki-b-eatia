import React, { useEffect } from "react";
import {Spinner} from '@inkjs/ui';
import { DEFAULT_LOADING_TIME } from "../consts";


export const Loading = ({ label, type = "orangeBluePulse", loadingTime = DEFAULT_LOADING_TIME, handleLoadingFinished }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
			handleLoadingFinished();
		}, loadingTime);

		return () => clearTimeout(timer);
  }, [loadingTime, handleLoadingFinished]);

  return (<Spinner label={label} type={type} />);
}
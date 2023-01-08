import React, { memo, ReactElement } from 'react';

interface IConditionalRender {
	children?: ReactElement | ReactElement[] | Element | Element[];
	onTrue?: () => ReactElement | ReactElement[] | undefined;
	onFalse?: () => ReactElement | ReactElement[] | undefined;
	show: boolean;
}

const ConditionalRender = ({ children, show, onTrue, onFalse }: IConditionalRender): ReactElement => {
	if (show) {
		if (onTrue) {
			return <>{onTrue()}</>;
		} else {
			return <>{children}</>;
		}
	} else {
		if (onFalse) {
			return <>{onFalse()}</>;
		}
	}
	return <></>;
};

export default memo(ConditionalRender);
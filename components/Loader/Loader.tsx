import { FC } from 'react';
import LoaderIcon from 'assets/svg/app/loader.svg';

import { AbsoluteCenteredDiv } from 'styles/common';

type LoaderProps = {
	inline?: boolean;
	width?: string;
	height?: string;
};

export const Loader: FC<LoaderProps> = ({ inline, width = '38px', height = '38px', ...rest }) => {
	const loader = <LoaderIcon style={{ width, height }} />;

	return inline ? loader : <AbsoluteCenteredDiv {...rest}>{loader}</AbsoluteCenteredDiv>;
};

Loader.defaultProps = {
	inline: false,
};

export default Loader;

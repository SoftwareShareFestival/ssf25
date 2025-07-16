interface Props {
	width?: number;
	height?: number;
}

export default function Spacer({ width, height }: Props) {
	return (
		<div style={{width, height}}></div>
	);
}

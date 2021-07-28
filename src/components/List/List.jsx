export default function List (props) {
	const {
		children,
		style,
		title = '',
		subtitle = '',
	} = props;

	const rootClass = 'pb-3';

	return (
		<div style={style} className={rootClass}>
			<h3 className='font-semibold text-lg uppercase'>{title}</h3>
      <span className='text-gray-500 text-base'>{subtitle}</span>
			<ul className="list-disc pl-10 mt-3">
				{children}
			</ul>
		</div>
	);
}
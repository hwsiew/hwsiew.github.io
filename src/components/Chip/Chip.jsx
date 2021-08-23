
import 'boxicons';

export default function Chip (props) {

	const {
		children,
		icon
	} = props;

	return (
		<div className="flex justify-center items-center bg-gray-300 p-1 rounded-full mr-1 my-1">
			{ icon && <span className="bg-white p-1 rounded-full flex items-center justify-center">
				<box-icon name={icon} type='logo' size="18px"></box-icon>
			</span> }
			<span className="mx-1">{children}</span>
		</div>	
	);
}
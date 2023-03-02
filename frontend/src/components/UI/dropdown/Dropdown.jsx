import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownItemTagsExample({ title, params, onClick }) {
    return (
        <DropdownButton id="dropdown-item-button" title={title}>
            <Dropdown.ItemText>{title}</Dropdown.ItemText>
                {
                    params &&
                        params.map(param => (
                            <Dropdown.Item as="button" onClick={() => onClick(param.type, param.value)}>{param.name}</Dropdown.Item>
                        ))
                }
        </DropdownButton>
    );
}

export default DropdownItemTagsExample;
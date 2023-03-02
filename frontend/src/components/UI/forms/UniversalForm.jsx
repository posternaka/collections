import Form from 'react-bootstrap/Form';

const UniversalForm = ({ params, type, onClick }) => {
    return (
        <div className="mb-3">
            {
                params.map(it => (
                    <Form.Check
                        inline
                        label={it.value}
                        name="group1"
                        type={type}
                        onClick={() => onClick(it.order)}
                    />
                ))
            }
        </div>
    )
}

export default UniversalForm;
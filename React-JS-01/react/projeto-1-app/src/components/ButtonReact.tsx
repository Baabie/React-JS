interface ButtonReactProps {
    label: string;
    bordaArredondada: string;
}

function ButtonReact(props: ButtonReactProps) {
    return (
        <button style= {{borderRadius: props.bordaArredondada}}>
            {props.label}
        </button>
    );
}

export default ButtonReact;

// "props" è un OGGETTO che contiene tutte le prop ricevute dal componente!

const LinkComponent = function (props) {
  return (
    <span className="me-2">
      <a href={props.link} target="_blank">
        {props.testo}
      </a>
    </span>
  )
}

export default LinkComponent

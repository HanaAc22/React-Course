import "./styles.css";

export default function App() {
  const states = {
    clients: [
      { id: 1, nom: "client1" },
      { id: 2, nom: "client2" },
      { id: 3, nom: "client3" },
      { id: 4, nom: "client4" }
    ]
  };
  const title = "liste de clients";
  const Myelement = <li>Test element</li>;
  const elements = [
    <li> Premier élément </li>,
    <li>Deuxiéme élément</li>,
    <li>Teoisiéme élément</li>
  ];

  return (
    <>
      <h1>{title}</h1>
      <ul>{elements}</ul>
      <form>
        <input type="text" placeholder="Ajouter un client" />
        <button>Confirmer</button>
      </form>
    </>
  );
}

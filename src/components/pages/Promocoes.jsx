import MultiActionAreaCard from "./MultiActionAreaCard";

const Promocoes = () => {
  const listaPromocoes = [
    {
      title: 'Camiseta 1',
      text: 'Sobre a camiseta 1',
      price: 200.90,
      description: 'camisa 1',
      image: "https://www.foxtonbrasil.com.br/_next/image?url=https%3A%2F%2Ffoxton.vtexassets.com%2Farquivos%2Fids%2F600335%2F710265_00449_1-CAMISETA-MINIMAL.jpg%3Fv%3D638690112300430000&w=384&q=90"
    },
    {
      title: 'Camiseta 2',
      text: 'Sobre a camiseta 2',
      price: 200.90,
      description: 'camisa 2',
      image: "https://www.foxtonbrasil.com.br/_next/image?url=https%3A%2F%2Ffoxton.vtexassets.com%2Farquivos%2Fids%2F600335%2F710265_00449_1-CAMISETA-MINIMAL.jpg%3Fv%3D638690112300430000&w=384&q=90"
    },
    {
      title: 'Camiseta 3',
      text: 'Sobre a camiseta 3',
      price: 200.90,
      description: 'camisa 3',
      image: "https://www.foxtonbrasil.com.br/_next/image?url=https%3A%2F%2Ffoxton.vtexassets.com%2Farquivos%2Fids%2F600335%2F710265_00449_1-CAMISETA-MINIMAL.jpg%3Fv%3D638690112300430000&w=384&q=90"
    },
  ]



  return (
    <div>
        <ul>
          {listaPromocoes.map((item, index) => (
            <li key={index}>
              <MultiActionAreaCard url={item.image} 
              title={item.title}
              text={item.text}
              />
            </li>
          ))}
        </ul>
      </div>
    );
};


export default Promocoes;
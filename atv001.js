const pessoa = {
    nome: "Anna Macedo",
    sexo: "Feminino",
    idade: 22,
    salario: 4500.00
  };
  
  const veiculo = {
    marca: "Honda",
    modelo: "Civic",
    anoFabricacao: 2020,
    anoModelo: 2021,
    valor: 120000.00
  };
  
  console.log("Informações da Pessoa:");
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Sexo: ${pessoa.sexo}`);
  console.log(`Idade: ${pessoa.idade}`);
  console.log(`Salário: R$ ${pessoa.salario.toFixed(2)}`);
  
  console.log("\nInformações do Veículo:");
  console.log(`Marca: ${veiculo.marca}`);
  console.log(`Modelo: ${veiculo.modelo}`);
  console.log(`Ano de Fabricação: ${veiculo.anoFabricacao}`);
  console.log(`Ano do Modelo: ${veiculo.anoModelo}`);
  console.log(`Valor: R$ ${veiculo.valor.toFixed(2)}`);
  
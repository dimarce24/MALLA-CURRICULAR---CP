// Archivo materias.js
// Nodos (materias)
var nodes = new vis.DataSet([
  {id: 0, label: 'MATEMÁTICA I', title: 'Semestre: 1', group: 1},
  {id: 1, label: 'FUNDAMENTOS DE DERECHO', title: 'Semestre: 1', group: 1},
  {id: 2, label: 'CULTURA Y DEPORTE', title: 'Semestre: 1', group: 1},
  {id: 3, label: 'COMUNICACIÓN ORAL Y ESCRITA', title: 'Semestre: 1', group: 1},
  {id: 4, label: 'PROYECTO DE VIDA', title: 'Semestre: 1', group: 1},
  {id: 5, label: 'CONTABILIDAD I', title: 'Semestre: 1', group: 1},
  {id: 6, label: 'SISTEMAS DE INFORMACIÓN I', title: 'Semestre: 1', group: 1},
  {id: 7, label: 'MATEMÁTICA II', title: 'Semestre: 2', group: 2},
  {id: 8, label: 'LEGISLACIÓN COMERCIAL', title: 'Semestre: 2', group: 2},
  {id: 9, label: 'ECONOMÍA I', title: 'Semestre: 2', group: 2},
  {id: 10, label: 'FUNDAMENTOS DE ADMINISTRACIÓN', title: 'Semestre: 2', group: 2},
  {id: 11, label: 'EPISTEMOLOGÍA DE LA INVESTIGACIÓN CONTABLE', title: 'Semestre: 2', group: 2}
]);

// Enlaces (prerrequisitos)
var edges = new vis.DataSet([
  {from: 0, to: 7},
  {from: 1, to: 8}
]);

// Exportar para index.html
var data = {
  nodes: nodes,
  edges: edges
};

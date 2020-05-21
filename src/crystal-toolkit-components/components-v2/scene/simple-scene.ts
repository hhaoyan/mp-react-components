import { JSON3DObject, ThreePosition } from '../Simple3DScene/constants';

export interface SceneJsonObject {
  name?: string;
  repeat: [number, number, number];
  lattice: number[][];
  contents?: SceneJsonObject[];
  type?: JSON3DObject;
  clickable?: boolean;
  color?: string;
  radius?: number;
  visible?: boolean;
  origin?: ThreePosition;
  positions?: ThreePosition[];
  headLength?: number;
  headWidth?: number;
  tooltip?: string;
  scale?: ThreePosition[];
  positionPairs?: Array<ThreePosition[]>;
  keyframes?: number[];
  animate?: any[];
  id?: string;
}

export const s4 = {
  name: '_ct_StructureMoleculeComponent_1',
  duplicate: [5, [2, 2, 2]],
  contents: [
    {
      name: 'atoms',
      duplicate: [5, [4, 4, 4]], // duplicate 5 times,
      contents: [
        {
          positions: [
            [1.6081450794147842, 0.9284629773820368, 2.6153700106355755],
            [-1.9414784057759444e-8, 1.8569259826179634, 5.235351240635575],
            [-1.9414784057759444e-8, 1.8569259826179634, -0.004611219364424821]
          ],
          color: '#9ee373',
          radius: 0.8,
          type: 'ellipsoids',
          scale: [0.4, 1.2, 1.9],
          clickable: true
        },
        {
          positions: [
            [1.6081450794147842, 0.9284629773820368, 4.589578371864425],
            [-1.9414784057759444e-8, 1.8569259826179634, 1.9695971418644245]
          ],
          color: '#b0b9e6',
          radius: 0.5,
          type: 'spheres',
          clickable: true
        }
      ],
      origin: [-0.80407253, -1.39269448, -2.61998123],
      visible: true
    },
    {
      name: 'bonds',
      contents: [
        {
          positionPairs: [
            [
              [1.6081450794147842, 0.9284629773820368, 2.6153700106355755],
              [0.8040725300000001, 1.39269448, 2.29248357625]
            ],
            [
              [1.6081450794147842, 0.9284629773820368, 2.6153700106355755],
              [1.6081450794147842, 0.9284629773820368, 3.6024741912500002]
            ],
            [
              [-1.9414784057759444e-8, 1.8569259826179634, 5.235351240635575],
              [0.8040725300000001, 1.39269448, 4.91246480625]
            ],
            [
              [-1.9414784057759444e-8, 1.8569259826179634, -0.004611219364424821],
              [-1.9414784057759444e-8, 1.8569259826179634, 0.9824929612499999]
            ]
          ],
          color: '#9ee373',
          radius: 0.1,
          type: 'cylinders',
          clickable: false
        },
        {
          positionPairs: [
            [
              [1.6081450794147842, 0.9284629773820368, 4.589578371864425],
              [0.8040725300000001, 1.39269448, 4.91246480625]
            ],
            [
              [1.6081450794147842, 0.9284629773820368, 4.589578371864425],
              [1.6081450794147842, 0.9284629773820368, 3.6024741912500002]
            ],
            [
              [-1.9414784057759444e-8, 1.8569259826179634, 1.9695971418644245],
              [0.8040725300000001, 1.39269448, 2.29248357625]
            ],
            [
              [-1.9414784057759444e-8, 1.8569259826179634, 1.9695971418644245],
              [-1.9414784057759444e-8, 1.8569259826179634, 0.9824929612499999]
            ]
          ],
          animate: [[[1, 1, 1], [2, 2, 2], 0]],
          keyframes: [0, 1],
          color: '#b0b9e6',
          radius: 0.1,
          type: 'cylinders',
          clickable: false
        }
      ],
      origin: [-0.80407253, -1.39269448, -2.61998123],
      visible: true
    },
    {
      name: 'polyhedra',
      contents: [],
      origin: [-0.80407253, -1.39269448, -2.61998123],
      visible: true
    },
    {
      name: 'unit_cell',
      contents: [
        {
          name:
            'a=3.21629013, b=3.2162901337807175, c=5.23996246, alpha=90.0, beta=90.0, gamma=120.00000006396569',
          contents: [
            {
              positions: [
                [0, 0, 0],
                [3.21629013, 0, 0],
                [0, 0, 0],
                [-1.60814507, 2.78538896, 0],
                [0, 0, 0],
                [0, 0, 5.23996246],
                [3.21629013, 0, 0],
                [1.60814506, 2.78538896, 0],
                [3.21629013, 0, 0],
                [3.21629013, 0, 5.23996246],
                [-1.60814507, 2.78538896, 0],
                [1.60814506, 2.78538896, 0],
                [-1.60814507, 2.78538896, 0],
                [-1.60814507, 2.78538896, 5.23996246],
                [0, 0, 5.23996246],
                [3.21629013, 0, 5.23996246],
                [0, 0, 5.23996246],
                [-1.60814507, 2.78538896, 5.23996246],
                [1.60814506, 2.78538896, 0],
                [1.60814506, 2.78538896, 5.23996246],
                [3.21629013, 0, 5.23996246],
                [1.60814506, 2.78538896, 5.23996246],
                [-1.60814507, 2.78538896, 5.23996246],
                [1.60814506, 2.78538896, 5.23996246]
              ],
              type: 'lines',
              clickable: false
            }
          ],
          visible: false
        }
      ],
      origin: [-0.80407253, -1.39269448, -2.61998123],
      visible: true
    },
    {
      name: 'axes',
      contents: [
        {
          positionPairs: [
            [
              [-0.80407253, -1.39269448, -2.61998123],
              [0.19592747, -1.39269448, -2.61998123]
            ]
          ],
          color: 'red',
          radius: 0.07,
          headLength: 0.24,
          headWidth: 0.14,
          type: 'arrows',
          clickable: false
        },
        {
          positionPairs: [
            [
              [-0.80407253, -1.39269448, -2.61998123],
              [-1.304072530966841, -0.5266690767737673, -2.61998123]
            ]
          ],
          color: 'green',
          radius: 0.07,
          headLength: 0.24,
          headWidth: 0.14,
          type: 'arrows',
          clickable: false
        },
        {
          positionPairs: [
            [
              [-0.80407253, -1.39269448, -2.61998123],
              [-0.80407253, -1.39269448, -1.61998123]
            ]
          ],
          color: 'blue',
          radius: 0.07,
          headLength: 0.24,
          headWidth: 0.14,
          type: 'arrows',
          clickable: false
        },
        {
          positions: [[-0.80407253, -1.39269448, -2.61998123]],
          color: 'white',
          radius: 0.0175,
          type: 'spheres',
          clickable: false
        }
      ],
      visible: false
    }
  ],
  origin: [-0.80407253, -1.39269448, -2.61998123],
  visible: true
};

export const s2 = {
  name: '_ct_StructureMoleculeComponent_1',
  lattice: [
    [8, 2, -4],
    [3, 5, -5],
    [1, 1, 8]
  ],
  repeat: [5, 10, 7],
  contents: [
    {
      name: 'atoms',
      clickable: true,
      contents: [
        {
          positions: [
            [4.2, 4.2, 0],
            [0, 4.2, 4.2],
            [0, 4.2, 0],
            [4.2, 0, 4.2],
            [4.2, 4.2, 4.2],
            [0, 0, 0],
            [0, 0, 4.2],
            [4.2, 0, 0]
          ],
          color: '#f9dc3c',
          radius: 0.5,
          tooltip: 'label',
          type: 'spheres',
          clickable: true,
          animate: [
            [4, 4, 1],
            [1, 4, 4],
            [1, 4, 1],
            [4, 1, 4],
            [4, 4, 4],
            [1, 1, 1],
            [1, 1, 4],
            [4, 1, 1]
          ],
          keyframes: [0, 1]
        },
        {
          positions: [[2.1, 2.1, 2.1]],
          color: '#4444ff',
          radius: 0.5,
          type: 'spheres',
          tooltip: 'label',
          clickable: true,
          animate: [1, 1, 1],
          keyframes: [0, 1]
        }
      ],
      origin: [-2.1, -2.1, -2.1],
      visible: true
    },
    {
      name: 'bonds',
      contents: [
        {
          positionPairs: [
            [
              [4.2, 4.2, 0],
              [3.1500000000000004, 3.1500000000000004, 1.05]
            ],
            [
              [0, 4.2, 4.2],
              [1.05, 3.1500000000000004, 3.1500000000000004]
            ],
            [
              [0, 4.2, 0],
              [1.05, 3.1500000000000004, 1.05]
            ],
            [
              [4.2, 0, 4.2],
              [3.1500000000000004, 1.05, 3.1500000000000004]
            ],
            [
              [4.2, 4.2, 4.2],
              [3.1500000000000004, 3.1500000000000004, 3.1500000000000004]
            ],
            [
              [0, 0, 0],
              [1.05, 1.05, 1.05]
            ],
            [
              [0, 0, 4.2],
              [1.05, 1.05, 3.1500000000000004]
            ],
            [
              [4.2, 0, 0],
              [3.1500000000000004, 1.05, 1.05]
            ]
          ],
          animate: [
            [[4, 4, 1], [1, 1, 1], 0],
            [[1, 4, 4], [1, 1, 1], 1],
            [[1, 4, 1], [1, 1, 1], 2],
            [[4, 1, 4], [1, 1, 1], 3],
            [[4, 4, 4], [1, 1, 1], 4],
            [[1, 1, 1], [1, 1, 1], 5],
            [[1, 1, 4], [1, 1, 1], 6],
            [[4, 1, 1], [1, 1, 1], 7]
          ],
          keyframes: [0, 1],
          color: '#f9dc3c',
          tooltip: 'label',
          radius: 0.1,
          type: 'cylinders',
          clickable: true
        },
        {
          positionPairs: [
            [
              [2.1, 2.1, 2.1], // starts from center sphere
              [1.05, 1.05, 1.05] // end in yellow
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 1.05, 1.05]
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 3.1500000000000004, 3.1500000000000004]
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 1.05, 3.1500000000000004]
            ],
            [
              [2.1, 2.1, 2.1],
              [1.05, 3.1500000000000004, 1.05]
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 3.1500000000000004, 1.05]
            ],
            [
              [2.1, 2.1, 2.1],
              [1.05, 1.05, 3.1500000000000004]
            ],
            [
              [2.1, 2.1, 2.1],
              [1.05, 3.1500000000000004, 3.1500000000000004]
            ]
          ],
          animate: [
            [[1, 1, 1], [0, 0, 0], 0],
            [[1, 1, 1], [0, 0, 0], 1],
            [[1, 1, 1], [0, 0, 0], 2],
            [[1, 1, 1], [0, 0, 0], 3],
            [[1, 1, 1], [0, 0, 0], 4],
            [[1, 1, 1], [0, 0, 0], 5],
            [[1, 1, 1], [0, 0, 0], 6],
            [[1, 1, 1], [0, 0, 0], 7]
          ],
          keyframes: [0, 1],
          color: '#a121f6',
          radius: 0.1,
          type: 'cylinders',
          tooltip: 'label',
          clickable: true
        }
      ],
      origin: [-2.1, -2.1, -2.1],
      visible: true
    },
    {
      name: 'cubes',
      contents: [
        {
          positions: [
            [4, 4, 4],
            [10, 10, 10]
          ],
          width: 2,
          color: '#ababaa',
          type: 'cubes',
          animate: [10, 10, 10],
          tooltip: 'label',
          keyframes: [0, 1]
        }
      ]
    },
    {
      name: 'polyhedra',
      contents: [
        {
          positions: [
            [2.1, 2.1, 2.1],
            [0, 0, 0],
            [4.2, 0, 0],
            [4.2, 4.2, 4.2],
            [4.2, 0, 4.2],
            [0, 4.2, 0],
            [4.2, 4.2, 0],
            [0, 0, 4.2],
            [0, 4.2, 4.2]
          ],
          animate: [
            [[3.1, 3.1, 3.1], 0],
            [[1, 1, 1], 1],
            [[4, 1, 1], 2],
            [[4, 4, 4], 3],
            [[4, 1, 4], 5],
            [[1, 4, 1], 6],
            [[4, 4, 1], 7],
            [[1, 1, 4], 8],
            [[1, 4, 4], 9]
          ],
          keyframes: [0, 1],
          color: '#a121f6',
          type: 'convex'
        }
      ],
      origin: [-2.1, -2.1, -2.1],
      tooltip: 'label',
      visible: true
    },
    {
      name: 'unit_cell',
      contents: [
        {
          name: 'a=4.2, b=4.2, c=4.2, alpha=90.0, beta=90.0, gamma=90.0',
          contents: [
            {
              positions: [
                [0, 0, 0],
                [4.2, 0, 0],
                [0, 0, 0],
                [0, 4.2, 0],
                [0, 0, 0],
                [0, 0, 4.2],
                [4.2, 0, 0],
                [4.2, 4.2, 0],
                [4.2, 0, 0],
                [4.2, 0, 4.2],
                [0, 4.2, 0],
                [4.2, 4.2, 0],
                [0, 4.2, 0],
                [0, 4.2, 4.2],
                [0, 0, 4.2],
                [4.2, 0, 4.2],
                [0, 0, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 0],
                [4.2, 4.2, 4.2],
                [4.2, 0, 4.2],
                [4.2, 4.2, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 4.2]
              ],
              animate: [
                [0, 0, 0],
                [4.2, 0, 0],
                [0, 0, 0],
                [0, 4.2, 0],
                [0, 0, 0],
                [0, 0, 4.2],
                [4.2, 0, 0],
                [4.2, 4.2, 0],
                [4.2, 0, 0],
                [4.2, 0, 4.2],
                [0, 4.2, 0],
                [4.2, 4.2, 0],
                [0, 4.2, 0],
                [0, 4.2, 4.2],
                [0, 0, 4.2],
                [4.2, 0, 4.2],
                [0, 0, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 0],
                [4.2, 4.2, 4.2],
                [4.2, 0, 4.2],
                [4.2, 4.2, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 4.2]
              ],
              keyframes: [0, 1],
              type: 'lines'
            }
          ],
          visible: false
        }
      ],
      origin: [-2.1, -2.1, -2.1],
      visible: false
    },
    {
      name: 'axes',
      contents: [
        {
          positionPairs: [
            [
              [-2.1, -2.1, -2.1],
              [-1.4, -1.4, -3.1]
            ]
          ],
          color: 'red',
          radius: 0.07, // / 0.37302772291498865) * 2,
          headLength: 0.24,
          headWidth: 0.14,
          type: 'arrows',
          clickable: false
        },
        {
          positionPairs: [
            [
              [-2.1, -2.1, -2.1],
              [-0.1, -2.5, -1.1]
            ]
          ],
          color: 'green',
          radius: 0.07, // / 0.37302772291498865) * 2,
          headLength: 0.24, // / 0.37302772291498865,
          headWidth: 0.14, // 0.37302772291498865,
          type: 'arrows',
          clickable: false
        },
        {
          positionPairs: [
            [
              [-2.1, -2.1, -2.1],
              [-1.1, -1.1, -1.1]
            ]
          ],
          color: 'blue',
          radius: 0.07, // 0.37302772291498865) * 2,
          headLength: 0.24, // / 0.37302772291498865) * 2,
          headWidth: 0.14, // / 0.37302772291498865) * 2,
          type: 'arrows',
          clickable: false
        },
        {
          positions: [[-2.1, -2.1, -2.1]],
          color: 'black',
          radius: 0.0175,
          type: 'spheres',
          clickable: false
        }
      ],
      visible: false
    }
  ],
  origin: [-2.1, -2.1, -2.1],
  visible: true
};

export const s3 = {
  name: '_ct_StructureMoleculeComponent_1',
  contents: [
    {
      name: 'bonds',
      contents: [
        {
          positionPairs: [
            [
              [4.2, 4.2, 0],
              [3.1500000000000004, 3.1500000000000004, 1.05]
            ],
            [
              [0, 4.2, 4.2],
              [1.05, 3.1500000000000004, 3.1500000000000004]
            ],
            [
              [0, 4.2, 0],
              [1.05, 3.1500000000000004, 1.05]
            ],
            [
              [4.2, 0, 4.2],
              [3.1500000000000004, 1.05, 3.1500000000000004]
            ],
            [
              [4.2, 4.2, 4.2],
              [3.1500000000000004, 3.1500000000000004, 3.1500000000000004]
            ],
            [
              [0, 0, 0],
              [1.05, 1.05, 1.05]
            ],
            [
              [0, 0, 4.2],
              [1.05, 1.05, 3.1500000000000004]
            ],
            [
              [4.2, 0, 0],
              [3.1500000000000004, 1.05, 1.05]
            ]
          ],
          animate: [
            [[4, 4, 1], [1, 1, 1], 0],
            [[1, 4, 4], [1, 1, 1], 1],
            [[1, 4, 1], [1, 1, 1], 2],
            [[4, 1, 4], [1, 1, 1], 3],
            [[4, 4, 4], [1, 1, 1], 4],
            [[1, 1, 1], [1, 1, 1], 5],
            [[1, 1, 4], [1, 1, 1], 6],
            [[4, 1, 1], [1, 1, 1], 7]
          ],
          keyframes: [0, 1],
          color: '#f9dc3c',
          tooltip: 'label',
          radius: 0.1,
          type: 'cylinders',
          clickable: true
        },
        {
          positionPairs: [
            [
              [2.1, 2.1, 2.1], // starts from center sphere
              [1.05, 1.05, 1.05] // end in yellow
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 1.05, 1.05]
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 3.1500000000000004, 3.1500000000000004]
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 1.05, 3.1500000000000004]
            ],
            [
              [2.1, 2.1, 2.1],
              [1.05, 3.1500000000000004, 1.05]
            ],
            [
              [2.1, 2.1, 2.1],
              [3.1500000000000004, 3.1500000000000004, 1.05]
            ],
            [
              [2.1, 2.1, 2.1],
              [1.05, 1.05, 3.1500000000000004]
            ],
            [
              [2.1, 2.1, 2.1],
              [1.05, 3.1500000000000004, 3.1500000000000004]
            ]
          ],
          animate: [
            [[1, 1, 1], [0, 0, 0], 0],
            [[1, 1, 1], [0, 0, 0], 1],
            [[1, 1, 1], [0, 0, 0], 2],
            [[1, 1, 1], [0, 0, 0], 3],
            [[1, 1, 1], [0, 0, 0], 4],
            [[1, 1, 1], [0, 0, 0], 5],
            [[1, 1, 1], [0, 0, 0], 6],
            [[1, 1, 1], [0, 0, 0], 7]
          ],
          keyframes: [0, 1],
          color: '#a121f6',
          radius: 0.1,
          type: 'cylinders',
          tooltip: 'label',
          clickable: true
        }
      ],
      origin: [-2.1, -2.1, -2.1],
      visible: true
    },
    {
      name: 'cubes',
      contents: [
        {
          positions: [
            [4, 4, 4],
            [10, 10, 10]
          ],
          width: 2,
          color: '#ababaa',
          type: 'cubes',
          animate: [10, 10, 10],
          tooltip: 'label',
          keyframes: [0, 1]
        }
      ]
    },
    {
      name: 'polyhedra',
      contents: [
        {
          positions: [
            [2.1, 2.1, 2.1],
            [0, 0, 0],
            [4.2, 0, 0],
            [4.2, 4.2, 4.2],
            [4.2, 0, 4.2],
            [0, 4.2, 0],
            [4.2, 4.2, 0],
            [0, 0, 4.2],
            [0, 4.2, 4.2]
          ],
          animate: [
            [[3.1, 3.1, 3.1], 0],
            [[1, 1, 1], 1],
            [[4, 1, 1], 2],
            [[4, 4, 4], 3],
            [[4, 1, 4], 5],
            [[1, 4, 1], 6],
            [[4, 4, 1], 7],
            [[1, 1, 4], 8],
            [[1, 4, 4], 9]
          ],
          keyframes: [0, 1],
          color: '#a121f6',
          type: 'convex'
        }
      ],
      origin: [-2.1, -2.1, -2.1],
      tooltip: 'label',
      visible: true
    },
    {
      name: 'unit_cell',
      contents: [
        {
          name: 'a=4.2, b=4.2, c=4.2, alpha=90.0, beta=90.0, gamma=90.0',
          contents: [
            {
              positions: [
                [0, 0, 0],
                [4.2, 0, 0],
                [0, 0, 0],
                [0, 4.2, 0],
                [0, 0, 0],
                [0, 0, 4.2],
                [4.2, 0, 0],
                [4.2, 4.2, 0],
                [4.2, 0, 0],
                [4.2, 0, 4.2],
                [0, 4.2, 0],
                [4.2, 4.2, 0],
                [0, 4.2, 0],
                [0, 4.2, 4.2],
                [0, 0, 4.2],
                [4.2, 0, 4.2],
                [0, 0, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 0],
                [4.2, 4.2, 4.2],
                [4.2, 0, 4.2],
                [4.2, 4.2, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 4.2]
              ],
              animate: [
                [0, 0, 0],
                [4.2, 0, 0],
                [0, 0, 0],
                [0, 4.2, 0],
                [0, 0, 0],
                [0, 0, 4.2],
                [4.2, 0, 0],
                [4.2, 4.2, 0],
                [4.2, 0, 0],
                [4.2, 0, 4.2],
                [0, 4.2, 0],
                [4.2, 4.2, 0],
                [0, 4.2, 0],
                [0, 4.2, 4.2],
                [0, 0, 4.2],
                [4.2, 0, 4.2],
                [0, 0, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 0],
                [4.2, 4.2, 4.2],
                [4.2, 0, 4.2],
                [4.2, 4.2, 4.2],
                [0, 4.2, 4.2],
                [4.2, 4.2, 4.2]
              ],
              keyframes: [0, 1],
              type: 'lines'
            }
          ],
          visible: false
        }
      ],
      origin: [-2.1, -2.1, -2.1],
      visible: false
    },
    {
      name: 'axes',
      contents: [
        {
          positionPairs: [
            [
              [-2.1, -2.1, -2.1],
              [-1.4, -1.4, -3.1]
            ]
          ],
          color: 'red',
          radius: 0.07, // / 0.37302772291498865) * 2,
          headLength: 0.24,
          headWidth: 0.14,
          type: 'arrows',
          clickable: false
        },
        {
          positionPairs: [
            [
              [-2.1, -2.1, -2.1],
              [-0.1, -2.5, -1.1]
            ]
          ],
          color: 'green',
          radius: 0.07, // / 0.37302772291498865) * 2,
          headLength: 0.24, // / 0.37302772291498865,
          headWidth: 0.14, // 0.37302772291498865,
          type: 'arrows',
          clickable: false
        },
        {
          positionPairs: [
            [
              [-2.1, -2.1, -2.1],
              [-1.1, -1.1, -1.1]
            ]
          ],
          color: 'blue',
          radius: 0.07, // 0.37302772291498865) * 2,
          headLength: 0.24, // / 0.37302772291498865) * 2,
          headWidth: 0.14, // / 0.37302772291498865) * 2,
          type: 'arrows',
          clickable: false
        },
        {
          positions: [[-2.1, -2.1, -2.1]],
          color: 'black',
          radius: 0.0175,
          type: 'spheres',
          clickable: false
        }
      ],
      visible: false
    }
  ],
  origin: [-2.1, -2.1, -2.1],
  visible: true
};

export const scene = {
  name: 'StructureMoleculeComponent',
  contents: [
    {
      name: 'axes',
      contents: [
        {
          positionPairs: [
            [
              [-2.13336842, -1.2940969500000001, -7.74158491],
              [-1.618063699237322, -1.2962610988334031, -6.884580615250245]
            ]
          ],
          color: 'red',
          radius: 0.7,
          headLength: 2.3,
          headWidth: 1.4,
          type: 'arrows',
          clickable: true
        },
        {
          positionPairs: [
            [
              [-2.13336842, -1.2940969500000001, -7.74158491],
              [-1.8972015468796977, -0.8360916583284603, -6.884580615470827]
            ]
          ],
          color: 'green',
          radius: 0.7,
          headLength: 2.3,
          headWidth: 1.4,
          type: 'arrows',
          clickable: true
        },
        {
          positionPairs: [
            [
              [-2.13336842, -1.2940969500000001, -7.74158491],
              [-2.1369361013796637, -1.296261098833144, -6.741593615983197]
            ]
          ],
          color: 'blue',
          radius: 0.7,
          headLength: 2.3,
          headWidth: 1.4,
          type: 'arrows',
          clickable: true
        },
        {
          positions: [[-2.13336842, -1.2940969500000001, -7.74158491]],
          color: 'white',
          radius: 0.175,
          type: 'spheres',
          clickable: true
        }
      ],
      origin: [0, 0, 0]
    }
  ],
  origin: [2.13336842, 1.2940969500000001, 7.74158491]
};

export const shperes = {
  name: 'StructureMoleculeComponent',
  contents: [
    {
      name: 'atoms',
      contents: [
        {
          name: 'axes',
          contents: [
            {
              positionPairs: [
                [
                  [-2.1, -2.1, -2.1],
                  [-1.4, -1.4, -3.1]
                ]
              ],
              color: 'red',
              radius: 0.07, // / 0.37302772291498865) * 2,
              headLength: 0.24,
              headWidth: 0.14,
              type: 'arrows',
              clickable: false
            },
            {
              positionPairs: [
                [
                  [-2.1, -2.1, -2.1],
                  [-0.1, -2.5, -1.1]
                ]
              ],
              color: 'green',
              radius: 0.07, // / 0.37302772291498865) * 2,
              headLength: 0.24, // / 0.37302772291498865,
              headWidth: 0.14, // 0.37302772291498865,
              type: 'arrows',
              clickable: false
            },
            {
              positionPairs: [
                [
                  [-2.1, -2.1, -2.1],
                  [-1.1, -1.1, -1.1]
                ]
              ],
              color: 'blue',
              radius: 0.07, // 0.37302772291498865) * 2,
              headLength: 0.24, // / 0.37302772291498865) * 2,
              headWidth: 0.14, // / 0.37302772291498865) * 2,
              type: 'arrows',
              clickable: false
            },
            {
              positions: [[-2.1, -2.1, -2.1]],
              color: 'black',
              radius: 0.0175,
              type: 'spheres',
              clickable: false
            }
          ],
          visible: false
        },
        {
          positions: [
            [-2.13336842, -1.2940969500000001, -7.74158491],
            [0.8064071299999997, -1.3064432600000002, -2.8524384100000004],
            [2.1537217799999997, 1.30644326, 2.0367080899999994],
            [-0.8064071300000002, 1.30644326, 2.8524384099999995],
            [2.13336842, 1.2940969500000001, 7.74158491],
            [-2.15372178, -1.3064432600000002, -2.0367080900000003],
            [0.7860537699999997, -1.31878957, 2.8524384099999995],
            [-0.7860537700000001, 1.3187895699999999, -2.8524384100000004]
          ],
          clickable: true,
          color: '#ffaaaa',
          radius: [0.5],
          type: 'spheres'
        },
        {
          positions: [
            [1.1352943356867837, 0.688667561081374, 4.1197692008924705],
            [-1.1352941382531998, -0.6886632575514795, -4.119769120104752]
          ],
          color: '#111111',
          radius: [0.5],
          type: 'spheres'
        },
        {
          positions: [[1.3132662690651387e-7, 0.000002162567968477802, -0.000004955452009625105]],
          color: '#00ffdd',
          radius: [0.65],
          type: 'spheres'
        }
      ],
      origin: [0, 0, 0]
    }
  ],
  origin: [-2.1, -2.1, -2.1]
};

export const buggyScene = {
  name: 'TestScene',
  contents: [
    {
      name: 'atoms',
      contents: [
        {
          positions: [
            [-0.7860537700000001, 1.3187895699999999, -2.8524384100000004],
            [-1.7860537700000001, 1.3187895699999999, -2.8524384100000004],
            [-2.7860537700000001, 1.3187895699999999, -2.8524384100000004],
            [-3.7860537700000001, 1.3187895699999999, -2.8524384100000004]
          ],
          color: '#ffaaaa',
          radius: [0.5],
          type: 'spheres'
        }
      ],
      origin: [0, 0, 0]
    }
  ],
  origin: [2.13336842, 1.2940969500000001, 7.74158491]
};

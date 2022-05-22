const isFetching: boolean = true;
const isLoading: boolean = false; 

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Hello', 1];

//Any
let variable: any = 42
//...
variable = 'New string'

//====
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('Хайзенберг')

//Never
function throwError(message: string): never {
  throw new Error(message)
}
function infinite(): never {
  while(true){

  }
}

//Type
type Login = string;
const login: Login = 'admin';
// const login2: Login = 4

type Id = string | number;
const id1: Id = '1'
const id2: Id = 1;
// const id3: Id = boolean;

type SomeType = string | null | undefined
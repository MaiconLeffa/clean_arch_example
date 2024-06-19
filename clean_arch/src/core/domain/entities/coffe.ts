export class Coffe {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;

  constructor(props: Coffe) {
    this.title = props.title;
    this.description = props.description;
    this.ingredients = props.ingredients;
    this.image = props.image;
    this.id = props.id;
  }
}

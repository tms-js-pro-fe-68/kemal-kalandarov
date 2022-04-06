import { useState } from 'react'

// export default class CounterButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     }
//   }

//   render() {
//     return (
//       <button type="button" onClick={() => this.setState(this.state.count + 1)}>
//         count {this.state.count}
//       </button>
//     );
//   }
// }

export default function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      count {count}
    </button>
  )
}

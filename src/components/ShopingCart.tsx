import React from 'react'

interface Props {}

interface State {
  isCartOpen: boolean
}

export class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isCartOpen: false,
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ isCartOpen: !this.state.isCartOpen })
          }}
        >
          购物车
        </button>
      </div>
    )
  }
}

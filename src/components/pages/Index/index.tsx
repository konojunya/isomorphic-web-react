import * as React from "react"
import { Link } from 'react-router-dom';

const Index: React.StatelessComponent = () => (
  <div>
    <h1>Hello! Index</h1>
    <Link to="/users">go to users</Link>
  </div>
)

export default Index;
import React from "react";
import { db } from "../firebase";
class SavedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ users: data });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="row">
        {users.map(user => (
          <div key={user.uid} className="col-lg-6 col-md-6 col-s-12 mb-4">
            <div className="card h-100">
              <div className="card">
                <div className="card-body">
                  <h5>{user.name}</h5>
                  <h6>{user.role}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SavedList;

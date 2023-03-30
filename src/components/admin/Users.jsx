import React from 'react'
import me from "../../assets/founder.jpeg"

const Users = () => {
    const arr = [1, 2, 3,];
  return (
      <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#0001</td>
                <td>Akash</td>
                    <td>
                        <img src={me} alt="User" />
                </td>
                <td>Admin</td>
                <td>{"28-03-2000"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  )
}

export default Users
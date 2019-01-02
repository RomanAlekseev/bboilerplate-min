import * as React from 'react';

type MyProps = {logOut: any};
type MyState = {organization: [{id: number, title: string, address: string, inn: string}]};

export class Organization extends React.Component<MyProps, MyState> {
    constructor(props: any){
        super(props);
        this.state = {organization: [
                {
        id: 1,
        title: 'Zodiac',
        address: 'ул.Московская 2а',
        inn: '1111-2222-3333'
          }
        ]}
    
    };
    render(){
        return(
          <>
            <header>
               <div className="container">
                  <div className="row">
                      <h1 className="mx-auto mt-5 pl-5">Organization</h1>
                      <button type="button" className="btn btn-danger mr-5 py-2" style={{height: '3rem', marginTop: '3rem', marginLeft: '-5rem'}} title='Exit' onClick={this.props.logOut}>LogOut</button>
                  </div> 
               </div> 
            </header> 
            <main>
               <div className="container">
                  <table className="table table-striped mt-4">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Adress</th>
                        <th scope="col">INN</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.organization.map(function(item: any){
                                return(
                                 <tr key={item.id}>  
                                  <th scope="row">{item.id}</th>
                                  <td>{item.title}</td>
                                  <td>{item.address}</td>
                                  <td>{item.inn}</td>
                                  <td>
                                    <button type="button" className="btn btn-outline-primary">Change</button>
                                    <button type="button" className="btn btn-outline-danger mx-2">Delete</button>
                                  </td>
                                </tr> 
                                )
                            })
                        }
                    </tbody>
                  </table>
                  <button type="button" className="btn btn-success mt-3 float-right" style={{marginRight: '17%'}}>Add Organization</button>
               </div> 
            </main>    
          </>   
        );
    }
}
import "./newUsers.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const NewUsers = () => { 

    return (
        <div className="single">
          <Sidebar />
          <div className="singleContainer">
            <Navbar />
            <div className="top">
              <div className="left">
                <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                <div className="item">
                  <img
                    src="https://pbs.twimg.com/profile_images/1362431344953982981/5I26nhqK_400x400.jpg"
                    alt=""
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="itemTitle">Dynamic Name</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">johndoe@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">+2345 67 891 01</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemValue">
                        FHC Estate, Lugbe, Abuja.
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">Nigeria</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
              </div>
            </div>
            <div className="bottom">
            <h1 className="title">Last Transactions</h1>
              <List/>
            </div>
          </div>
        </div>
      );
    };
    
    export default NewUsers;
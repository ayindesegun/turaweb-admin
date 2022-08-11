import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
//import Datatable from '../../components/datatable/Datatable'
//import { useParams } from 'react-router-dom'
//import { userColumns } from '../../datatablesource'
import { useEffect, useState } from 'react'
import {
  collection,
  //getDocs,
  //deleteDoc,
  //doc,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../../firebase'
//import { list } from "firebase/storage";

const Single = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, 'users'),
      (snapShot) => {
        let list = []
        snapShot.docs.forEach((doc) => {
          list.push({ _id: doc.id, ...doc.data() })
        })
        setData(list)
      },
      (error) => {
        console.log(error)
      }
    )

    return () => {
      unsub()
    }
  }, [])

  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        {data.map((item) => {
          return (
            <div className='top' key={item.id}>
              <div className='left'>
                <div className='editButton'>Edit</div>
                <h1 className='title'>Information</h1>
                <div className='item'>
                  <img
                    src='https://pbs.twimg.com/profile_images/1362431344953982981/5I26nhqK_400x400.jpg'
                    alt=''
                    className='itemImg'
                  />
                  <div className='details' key={item.id} >
                    <h1 className='itemTitle'>{item.businessName}</h1>
                    <div className='detailItem'>
                      <span className='itemKey'>Email:</span>
                      <span className='itemValue'>{item.email}</span>
                    </div>
                    <div className='detailItem'>
                      <span className='itemKey'>Phone:</span>
                      <span className='itemValue'>{item.phoneNumber}</span>
                    </div>
                    <div className='detailItem'>
                      <span className='itemKey'>Wallet Balance:</span>
                      <span className='itemValue'>
                        {item.walletBalance ? item.walletBalance : 'This user is broke'}
                      </span>
                      <br />
                      <br />
                      <span className='itemKey'>Business Category:</span>
                      <span className='itemValue'>
                        {item.businessCategory}
                      </span>
                    </div>
                    <div className='detailItem'>
                      <span className='itemKey'>Country:</span>
                      <span className='itemValue'>Nigeria</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <Chart aspect={3 / 1} title='User Spending ( Last 6 Months)' />
              </div>
            </div>
          )
        })}

        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single

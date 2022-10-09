import React, { useEffect, useState } from 'react'
import Dashboard from './dashboard'

export const Dashboardheading = () => {
    const[counter,setcounter]=useState(0)
    useEffect(() => {
        console.log("iam raj");
    }, []);
    useEffect(() => {
        return ()=>{ console.log("iam the raj")
    }
       
    }, [])
    useEffect(() => {
        console.log("iam raj");
    }, [counter]);
    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard{counter}</h1>
                <button onClick={()=>setcounter(counter+1)} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</button>
            </div>
            <div class="row">
                <Dashboard planname="Earnings (Monthly)" event="$40,000" />
                <Dashboard planname="Earnings (Annual" event="$215,000" />
                <Dashboard planname="Tasks" event="50%" />
                <Dashboard planname="Pending Requests" event="18" />
            </div>
        </div>

    )
}
export default Dashboardheading
import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../layouts/main';
import Toolbar from '../components/toolbar';

import '../public/css/main.css'

const MainView = dynamic(() => import ('../components/main'), {
    loading: () => <div><p>Loading...</p></div>
})

export default class Index extends React.Component {

    render(){
        const title = "EasyTrans"
        return (
        
        <Layout title={ title }>

            <Toolbar title={ title } class={'navTransparent navbar-dark'}/>
            <MainView title={ title }/>

        </Layout>)
    }

}
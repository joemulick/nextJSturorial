import Head from 'next/head'
import Navbar from './Navbar'
import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'reactstrap'

const layoutStyle = {
  margin: '0',
  padding: '0',
  margin: '0';
  padding: '0';
  border: '0';
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
}

const Layout = (props) => (
	<div style={layoutStyle}>
		<Head>
      			<title>{ title }</title>
      			<meta charSet='utf-8' />
      			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
    	</Head>

		<Container>
		    
    		<Navbar />
    		{props.children}

    	</Container>
  	</div>

)

export default Layout


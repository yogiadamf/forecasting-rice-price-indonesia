import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
import ProduksiRiau from './produksiRiau'
import InflasiRiau from './inflasiRiau'
import KonsumsiRiau from './konsumsiRiau'

function Riau(){
    const styles={marginLeft:"20%"}
    return(
    <>
    <header id='header'>
      <div className='riau'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 beras-text'>
                <h1>Provinsi Riau
                  <span></span>
                </h1>
                <p>Peramalan Harga Beras, Produksi Padi, Tingkat Inflasi, Konsumsi Provinsi Riau Periode Januari-Desember 2022</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Harga Beras Provinsi Riau</h2>
          <p>Plot Peramalan Harga Beras Provinsi Riau Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Aktual Harga Beras',
                        data: [13050,
                          13050,
                          13050,
                          13050,
                          13300,
                          13300,
                          13300,
                          12250,
                          12050,
                          12150,
                          12100,
                          12100,
                          ],
                        borderColor: 'black',
                        borderWidth: 1,
                      },
                      {
                        label: 'Data Ramalan Harga Beras',
                        data: [12809.10961,
                          12650.49174,
                          12590.71610,
                          12596.41370,
                          12609.00221,
                          12641.90200,
                          12659.98466,
                          12616.39567,
                          12579.80526,
                          12610.13536,
                          12643.98349,
                          12643.88980,
                          12606.91569,
                          12544.15023,
                          12559.23215,
                          12558.45843,
                          12571.00716,
                          12603.36739,
                          12620.98988,
                          12577.34222,
                          12539.10731,
                          12568.87467,
                          12599.06966,
                          12598.18454,
                          ],
                      borderColor: 'red',
                      borderWidth: 1,
                      },
                    ],
                  }}
                  height={400}
                  width={600}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        display: true,
                        title: {
                          display: true,
                          text: 'Harga Beras (Rp)',
                          font: {
                            size: 20,
                            style: 'normal',
                            lineHeight: 1.2
                          },
                          padding: {top: 30, left: 0, right: 0, bottom: 0}
                        }
                      },
                      x: {
                        display: true,
                        title: {
                          display: true,
                          text: 'Tahun 2021-2022',
                          font: {
                            size: 20,
                            style: 'normal',
                            lineHeight: 1.2
                          },
                          padding: {top: 30, left: 0, right: 0, bottom: 0}
                        }
                      }
                    },
                    legend: {
                      labels: {
                        fontSize: 25,
                      },
                    },
                  }}
                />
        </div>  
    
    <div className='col-lg-8 col-lg-8' style={styles}>
    <h3>Berikut tabel hasil peramalan harga beras di provinsi Riau</h3>
    <h4>Model : Y = 8717.7 - 0.0276X1 + 102.37X 2 + 0.0446X3 + 1178</h4>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Provinsi</th>
              <th>Bulan</th>
              <th>Harga Ramalan(Rp)</th>
              <th>Harga Aktual(Rp)</th>
              <th>Error</th>
              <th>Error/Harga Aktual</th>
            </tr>
          </thead>
          <tbody>
            {data.Riau.map((item, i)=>(
              <tr key={i}>
              <td>{item.Provinsi}</td>
              <td>{item.Tahun}</td>
              <td>{item['Harga Ramalan']}</td>
              <td>{item['Harga Aktual']}</td>
              <td>{item.Error}</td>
              <td>{item['Error/Harga Aktual']}</td>
            </tr>
            ))}
          </tbody>
        </Table>
    </div>
    </div>
    <ProduksiRiau/>
    <InflasiRiau/>
    <KonsumsiRiau/>
    </div>
    </>
    )
}

export default Riau
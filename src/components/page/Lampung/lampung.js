import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
import ProduksiLampung from './produksiLampung'
import InflasiLampung from './inflasiLampung'
import KonsumsiLampung from './konsumsiLampung'

function Lampung(){
    const styles={marginLeft:"20%"}
    return(
    <>
    <header id='header'>
      <div className='lampung'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 beras-text'>
                <h1>Provinsi Lampung
                  <span></span>
                </h1>
                <p>Peramalan Harga Beras, Produksi Padi, Tingkat Inflasi, Konsumsi Provinsi Lampung Periode Januari-Desember 2022</p>
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
          <h2>Peramalan Harga Beras Provinsi Lampung</h2>
          <p>Plot Peramalan Harga Beras Provinsi Lampung Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Aktual Harga Beras',
                        data: [12650,
                          12550,
                          12550,
                          12550,
                          12550,
                          12550,
                          12550,
                          12550,
                          12550,
                          12500,
                          12950,
                          12950,
                          ],
                        borderColor: 'black',
                        borderWidth: 1,
                      },
                      {
                        label: 'Data Ramalan Harga Beras',
                        data: [12369.89752,
                          12370.17484,
                          12343.32568,
                          12324.50837,
                          12311.17982,
                          12338.33522,
                          12351.64715,
                          12307.21831,
                          12242.17280,
                          12259.66271,
                          12252.22828,
                          12302.76884,
                          12274.16092,
                          12243.79435,
                          12221.80889,
                          12226.37601,
                          12227.38052,
                          12243.12317,
                          12242.45969,
                          12201.57878,
                          12155.93481,
                          12183.80521,
                          12169.60258,
                          12209.07859,
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
    <h3>Berikut tabel hasil peramalan harga beras di provinsi Lampung</h3>
    <h4>Model : Y = 8717.7 - 0.0276X1 + 102.37X 2 + 0.0446X3 + 201</h4>
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
            {data.Lampung.map((item, i)=>(
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
    <ProduksiLampung/>
    <InflasiLampung/>
    <KonsumsiLampung/>
    </div>
    </>
    )
}

export default Lampung
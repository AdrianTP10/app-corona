import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import {Table} from 'flowbite-react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import Pagination from "@/Components/Paginaton";


export default function Dashboard({pedidos, auth}) {
  
   /* const generarArchivo = () =>{

      // Crear un libro de trabajo
      var workbook = XLSX.utils.book_new();
      
      // Crear una hoja de trabajo
      var worksheet = XLSX.utils.json_to_sheet(pedidos.data);
      
      // Añadir la hoja de trabajo al libro de trabajo
      XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja 1");
      
      // Crear un archivo Excel binario
      var excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      
      // Descargar el archivo Excel
      saveAs(new Blob([excelBuffer], { type: "application/octet-stream" }), "Pedidos "+format()+ ".xlsx");
   }
   const format = () =>{
      var fechaActual = new Date();
      var dia = fechaActual.getDate().toString().padStart(2, '0');
      var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
      var anio = fechaActual.getFullYear().toString();
      return dia + '-' + mes + '-' + anio;

   } */
   return (
      <AdminLayout
         user={auth.user}
         header={
               <h2 className="text-white text-2xl font-bold">
                  Tabla de Pedidos
               </h2>
         }
       
      >
         <Head title="Pedidos" />

         <div className="p-12 grow">
            <div className="max-w-7xl mx-auto h-full max-h-full sm:px-6 lg:px-8">
               
               <a href={route('admin.pedidos.reporte')} className="px-4 py-3 my-5 justify-self-end bg-[#215bac] border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-[#f9de81] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Generar Reporte</a>
               
               <div className="overflow-y-auto h-[500px] my-10">
                  <Table hoverable={true} striped={true} >
                     <Table.Head >
                           <Table.HeadCell className="text-base">ID</Table.HeadCell>
                           <Table.HeadCell className="text-base">Ruta</Table.HeadCell>
                           <Table.HeadCell className="text-base">BDR</Table.HeadCell>
                           <Table.HeadCell className="text-base">Repartidor</Table.HeadCell>
                           <Table.HeadCell className="text-base">Fecha</Table.HeadCell>
                           <Table.HeadCell className="text-base">Cajas del Pedido</Table.HeadCell>
                           <Table.HeadCell className="text-base">Cajas Devueltas</Table.HeadCell>
                           <Table.HeadCell className="text-base">Tiempo de Entrega (Horas/minutos)</Table.HeadCell>
                           
                           {/* <Table.HeadCell>
                              <span className="sr-only">Edit</span>
                           </Table.HeadCell> */}
                     </Table.Head>
                     <Table.Body className="divide-y">
                        
                        {
                           pedidos.data.map((pedido)=>(
                              <Table.Row key={pedido.id.toString()} className="bg-white text-gray-600 dark:text-white dark:border-gray-700 dark:bg-gray-800 text-base " >
                                 <Table.Cell>
                                    {pedido.id}
                                 </Table.Cell>
                                 <Table.Cell>{pedido.ruta}</Table.Cell>
                                 <Table.Cell className="whitespace-nowrap font-medium ">{pedido.bdr}</Table.Cell>
                                 <Table.Cell className="whitespace-nowrap font-medium ">{pedido.repartidor}</Table.Cell>
                                 <Table.Cell>{pedido.fecha}</Table.Cell>
                                 <Table.Cell>{pedido.cantidad_pedido}</Table.Cell>
                                 <Table.Cell>{pedido.cantidad_devuelto}</Table.Cell>
                                 <Table.Cell> {pedido.tiempo}</Table.Cell>
                                 
                                 
                                 
                                 {/* <Table.Cell>
                                    <a
                                          href="/tables"
                                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                          Edit
                                    </a>
                                 </Table.Cell> */}
                           </Table.Row>
                           ))
         
                        }
                           
                     </Table.Body>
                  </Table>
               </div>
              
               
               <Pagination class="mt-6" links={pedidos.links} />


            
              
            </div>
         </div>
      </AdminLayout>
   );
}

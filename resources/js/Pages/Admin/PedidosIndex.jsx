import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {Table} from 'flowbite-react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';





export default function Dashboard({ auth, pedidos }) {
   
   const generarArchivo = () =>{

      // Crear un libro de trabajo
      var workbook = XLSX.utils.book_new();
      
      // Crear una hoja de trabajo
      var worksheet = XLSX.utils.json_to_sheet(pedidos);
      
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

   }
   return (
      <AuthenticatedLayout
         user={auth.user}
         header={
               <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Admin Panel
               </h2>
         }
      >
         <Head title="Dashboard" />

         <div className=" relative py-12 min-h-full">
            <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
               <Table hoverable={true}  striped={true} >
                  <Table.Head >
                        <Table.HeadCell className="text-base">Ruta</Table.HeadCell>
                        <Table.HeadCell className="text-base">Repartidor</Table.HeadCell>
                        <Table.HeadCell className="text-base">Fecha</Table.HeadCell>
                        <Table.HeadCell className="text-base">Cajas del Pedido</Table.HeadCell>
                        <Table.HeadCell className="text-base">Cajas Devueltas</Table.HeadCell>
                        <Table.HeadCell className="text-base">Tiempo de Entrega (Horas/minutos)</Table.HeadCell>
                        
                        <Table.HeadCell>
                           <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                     
                     {
                        pedidos.map((pedido)=>(
                           <Table.Row key={pedido.id.toString()} className="bg-white text-gray-600 dark:text-white dark:border-gray-700 dark:bg-gray-800 text-base " >
                              <Table.Cell className="whitespace-nowrap font-medium ">
                                 {pedido.ruta}
                              </Table.Cell>
                              <Table.Cell>{pedido.repartidor}</Table.Cell>
                              <Table.Cell>{pedido.fecha}</Table.Cell>
                              <Table.Cell>{pedido.cantidad_pedido}</Table.Cell>
                              <Table.Cell>{pedido.cantidad_devuelto}</Table.Cell>
                              <Table.Cell> {pedido.tiempo}</Table.Cell>
                              
                              
                              
                              <Table.Cell>
                                 <a
                                       href="/tables"
                                       className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                 >
                                       Edit
                                 </a>
                              </Table.Cell>
                        </Table.Row>
                        ))
      
                     }
                        
                  </Table.Body>
               </Table>

               <button className="p-3 bg-gray-200 rounded-lg mt-5" onClick={generarArchivo}>Descargar</button>
            </div>
         </div>
      </AuthenticatedLayout>
   );
}

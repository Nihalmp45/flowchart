import React, { useCallback,useState } from 'react';
import { useNavigate} from 'react-router-dom';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

export default function Flowchart() {
  const navigate = useNavigate();

  const handleNodeClick = useCallback((event, node) => {
    if (node.data.label === '2) Planning') {
      navigate('/planning');
      console.log('Navigated to Planning page');
    }else if (node.data.label === '1) Research') {
      navigate('/research');
      console.log('Navigated to Research page');
    }
    else if (node.data.label === '3) Designing') {
      navigate('/designing');
      console.log('Navigated to Research page');
    }
    else if (node.data.label === '4) Manufacturing') {
      navigate('/manufacturing');
      console.log('Navigated to Research page');
    }
    else if (node.data.label === '5) Sales/Marketing') {
      navigate('/sales');
      console.log('Navigated to Research page');
    }
  }, [navigate]);


  



const initialNodes = [
  { id: '1',position: { x: 250, y: 0 }, data: { label: '1) Research' },style:{backgroundColor:'rgb(234 234 107)',borderRadius:'8px',fontSize:'16px',fontWeight:'500',}},
  { id: '1.1', position: { x: 600, y: -100}, data: { label: 'External' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',}},
  { id: '1.2', position: { x: 600, y: 0 }, data: { label: 'Internal' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '2',position: { x: 1000, y: 250 }, data: { label: '2) Planning'},style:{backgroundColor: 'rgb(107, 190, 234)',borderRadius:'8px',fontSize:'16px',fontWeight:'500'}},
  { id: '2.1', position: { x: 600, y: 180 }, data: { label: 'PRD' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '2.2', position: { x: 600, y: 280 }, data: { label: 'Specs' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '3', position: { x: 250, y: 500 }, data: { label: '3) Designing' },style:{backgroundColor: 'rgb(234, 107, 107)',borderRadius:'8px',fontSize:'16px',fontWeight:'500',color:'white'} },
  { id: '3.1', position: { x: 600, y: 450 }, data: { label: 'Hardware' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '3.2', position: { x: 600, y: 550 }, data: { label: 'Software' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '4', position: { x: 1000, y: 750 }, data: { label: '4) Manufacturing' },style:{backgroundColor: 'rgb(107, 234, 107)',borderRadius:'8px',fontSize:'16px',fontWeight:'500' }},
  { id: '4.1', position: { x: 600, y: 700 }, data: { label: 'Material' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '4.2', position: { x: 600, y: 800 }, data: { label: 'Production' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '5', position: { x: 250, y: 1000 }, data: { label: '5) Sales/Marketing' },style:{backgroundColor: 'rgb(255, 178, 102)',borderRadius:'8px',fontSize:'16px',fontWeight:'500',color:'white'} },
  { id: '5.1', position: { x: 600, y: 950 }, data: { label: 'Online' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
  { id: '5.2', position: { x: 600, y: 1050 }, data: { label: 'Dealership' },style:{backgroundColor:'#DCDCDC',borderRadius:'8px',fontSize:'14px',fontWeight:'400',} },
];
const initialEdges =
    [{ id: 'e1-1', source: '1',sourceHandle:'a', target: '2' },  //source and target are based on id of initial Nodes
    { id: 'el-1.1', source: '1',sourceHandle: 'b', target: '1.1', type:'straight' },
    { id: 'el-1.2', source: '1',sourceHandle: 'b', target: '1.2', type:'straight' },        
    { id:'el-2',source: '2', target: '3' },
    { id: 'el-2.1', source: '2', target: '2.1', type:'straight' },
    { id: 'el-2.2', source: '2', target: '2.2', type:'straight' }, 
    { id:'el-3',source: '3', target: '4' },
    { id: 'el-3.1', source: '3', target: '3.1', type:'straight' },
    { id: 'el-3.2', source: '3', target: '3.2', type:'straight' }, 
    { id:'el-4',source: '4', target: '5' },
    { id: 'el-4.1', source: '4', target: '4.1', type:'straight' },
    { id: 'el-4.2', source: '4', target: '4.2', type:'straight' }, 
    { id: 'el-5.1', source: '5', target: '5.1', type:'straight' },
    { id: 'el-5.2', source: '5', target: '5.2', type:'straight' }, 
];    



 
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );


 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
      
      >
        <Controls/>
        <MiniMap/>
        <Background variant="dots" gap={12} size={1}  />
      </ReactFlow>
    </div>
  );
}
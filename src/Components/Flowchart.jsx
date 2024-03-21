import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import "./Flowchart.css";

export default function Flowchart() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const navigate = useNavigate();

  const handleNodeClick = useCallback(
    (event, node) => {
      if (node.data.label === "2) Planning") {
        navigate("/planning");
      } else if (node.data.label === "1) Research") {
        navigate("/research");
        console.log("Navigated to Research page");
      } else if (node.data.label === "3) Designing") {
        navigate("/designing");
        console.log("Navigated to Research page");
      } else if (node.data.label === "4) Manufacturing") {
        navigate("/manufacturing");
        console.log("Navigated to Research page");
      } else if (node.data.label === "5) Sales/Marketing") {
        navigate("/sales");
        console.log("Navigated to Research page");
      }
    },
    [navigate]
  );

  const handleNodeMouseMove = useCallback((event, node) => {
    setHoveredNode(node);
  }, []);

  const initialNodes = [
    {
      id: "1",
      position: { x: 250, y: 0 },
      data: {
        label: "1) Research",
        description: "Exploring and gathering information to gain knowledge.",
      },
      style: {
        backgroundColor: "rgb(234 234 107)",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
      },
    },
    {
      id: "1.1",
      position: { x: 600, y: -100 },
      data: {
        label: "External",
        description:
          "External research involves gathering information from sources outside the organization.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "1.2",
      position: { x: 600, y: 0 },
      data: {
        label: "Internal",
        description:
          "Internal research involves collecting data and insights from within the organization.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "2",
      position: { x: 1000, y: 250 },
      data: { label: "2) Planning",description: "Creating a strategic roadmap to achieve goals.", },
      style: {
        backgroundColor: "rgb(107, 190, 234)",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
      },
    },
    {
      id: "2.1",
      position: { x: 600, y: 180 },
      data: {
        label: "PRD",
        description:
          "PRD stands for Product Requirements Document. It outlines the functionality, features, and constraints of the product to be developed.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "2.2",
      position: { x: 600, y: 280 },
      data: {
        label: "Specs",
        description:
          "Specs refer to the specifications of the product. They define the technical details, components, and performance requirements of the product.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "3",
      position: { x: 250, y: 500 },
      data: { label: "3) Designing", description: "Creating product designs and specifications.", },
      style: {
        backgroundColor: "rgb(234, 107, 107)",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "500",
        color: "white",
        cursor: "pointer",
      },
    },
    {
      id: "3.1",
      position: { x: 600, y: 450 },
      data: {
        label: "Hardware",
        description:
          "Hardware refers to the physical components of a system, such as computer hardware or electronic devices.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "3.2",
      position: { x: 600, y: 550 },
      data: {
        label: "Software",
        description:
          "Software comprises the programs, applications, and instructions that enable hardware to perform specific tasks. It includes operating systems, utilities, and applications.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "4",
      position: { x: 1000, y: 750 },
      data: { label: "4) Manufacturing", description: "Production and assembly of the product.", },
      style: {
        backgroundColor: "rgb(107, 234, 107)",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
      },
    },
    {
      id: "4.1",
      position: { x: 600, y: 700 },
      data: {
        label: "Material",
        description:
          "Materials are substances used in the manufacturing process to create products. They can be raw materials or components.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "4.2",
      position: { x: 600, y: 800 },
      data: {
        label: "Production",
        description:
          "Production refers to the process of manufacturing goods or providing services. It involves converting raw materials into finished products.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "5",
      position: { x: 250, y: 1000 },
      data: { label: "5) Sales/Marketing", description: "Promotion and selling strategies." },
      style: {
        backgroundColor: "rgb(255, 178, 102)",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "500",
        color: "white",
        cursor: "pointer",
      },
    },
    {
      id: "5.1",
      position: { x: 600, y: 950 },
      data: {
        label: "Online",
        description:
          "Online sales refer to the process of selling goods or services over the internet. It allows businesses to reach a wider audience and conduct transactions remotely.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    {
      id: "5.2",
      position: { x: 600, y: 1050 },
      data: {
        label: "Dealership",
        description:
          "A dealership is a business that sells goods or services on behalf of another. In the context of sales and marketing, it often refers to automotive dealerships that sell cars.",
      },
      style: {
        backgroundColor: "#DCDCDC",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
  ];
  const initialEdges = [
    { id: "e1-1", source: "1", sourceHandle: "a", target: "2" }, //source and target are based on id of initial Nodes
    {
      id: "el-1.1",
      source: "1",
      sourceHandle: "b",
      target: "1.1",
      type: "straight",
    },
    {
      id: "el-1.2",
      source: "1",
      sourceHandle: "b",
      target: "1.2",
      type: "straight",
    },
    { id: "el-2", source: "2", target: "3" },
    { id: "el-2.1", source: "2", target: "2.1", type: "straight" },
    { id: "el-2.2", source: "2", target: "2.2", type: "straight" },
    { id: "el-3", source: "3", target: "4" },
    { id: "el-3.1", source: "3", target: "3.1", type: "straight" },
    { id: "el-3.2", source: "3", target: "3.2", type: "straight" },
    { id: "el-4", source: "4", target: "5" },
    { id: "el-4.1", source: "4", target: "4.1", type: "straight" },
    { id: "el-4.2", source: "4", target: "4.2", type: "straight" },
    { id: "el-5.1", source: "5", target: "5.1", type: "straight" },
    { id: "el-5.2", source: "5", target: "5.2", type: "straight" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        onNodeMouseMove={handleNodeMouseMove}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        {hoveredNode && (
          <div
            className="node-description"
            style={{
              position: "absolute",
              right:50,
              top:30
            }}
          >
            <div className="card">
              <div className="card-body">
                <h1>{hoveredNode.data.label}</h1>
                <p>{hoveredNode.data.description}</p>
              </div>
            </div>
          </div>
        )}
      </ReactFlow>
    </div>
  );
}

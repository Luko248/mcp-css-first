#!/usr/bin/env node

/**
 * Test script for MCP SSE connection using WebSocket
 */

const url = 'wss://mcp-css-first.chylik-lukas.workers.dev/sse';

console.log('Attempting to connect to:', url);
console.log('Using WebSocket protocol...\n');

// Test with WebSocket upgrade
const ws = new WebSocket(url);

ws.onopen = () => {
  console.log('✅ WebSocket connection established!');
  console.log('Connection successful - your worker is working correctly.');

  // Try sending an MCP initialization message
  const initMessage = {
    jsonrpc: '2.0',
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: {
        name: 'test-client',
        version: '1.0.0'
      }
    },
    id: 1
  };

  console.log('\nSending initialize message...');
  ws.send(JSON.stringify(initMessage));
};

ws.onmessage = (event) => {
  console.log('\n📨 Received message:');
  try {
    const data = JSON.parse(event.data);
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.log(event.data);
  }
};

ws.onerror = (error) => {
  console.error('❌ WebSocket error:', error.message || error);
};

ws.onclose = (event) => {
  console.log(`\n🔌 Connection closed (code: ${event.code})`);
  process.exit(0);
};

// Timeout after 10 seconds
setTimeout(() => {
  console.log('\n⏱️  Test timeout - closing connection');
  ws.close();
}, 10000);

import asyncio
import json
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

async def main():
    # Connect to MCP Playwright server
    server_params = StdioServerParameters(
        command="npx",
        args=["@modelcontextprotocol/server-playwright"]
    )
    
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            # Initialize the session
            await session.initialize()
            
            # Get available tools
            tools = await session.list_tools()
            print("Available tools:", [tool.name for tool in tools.tools])
            
            try:
                # Open Google
                await session.call_tool("playwright_navigate", {
                    "url": "https://www.google.com/"
                })
                print("Opened Google homepage")
                
                # Search for "top companies"
                await session.call_tool("playwright_fill", {
                    "selector": "textarea[name='q']",
                    "value": "top companies"
                })
                print("Entered search query")
                
                # Submit the search
                await session.call_tool("playwright_press", {
                    "selector": "textarea[name='q']",
                    "key": "Enter"
                })
                print("Submitted search")
                
                # Wait for results to load
                await session.call_tool("playwright_wait_for_selector", {
                    "selector": "#search"
                })
                print("Search results loaded")
                
                # Take a screenshot
                screenshot_result = await session.call_tool("playwright_screenshot", {
                    "path": "google_search_results.png"
                })
                print("Screenshot saved")
                
            except Exception as e:
                print(f"Error during automation: {e}")

if __name__ == "__main__":
    asyncio.run(main())
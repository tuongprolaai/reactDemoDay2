import { Tabs, Tab } from "@/components/Tabs";
import { useEffect, useState } from "react";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
};

function Children() {
    const [value, setValue] = useState("");

    useEffect(() => {
        return () => {
            console.log("Unmounted");
        };
    }, []);
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

function TabsDemo() {
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Tabs Demos</h1>

            <Tabs preserveContent id="tab1" defaultTabIndex={1} keepActiveTab>
                <Tab title="Tab 1">
                    <Children />
                </Tab>
                <Tab title="Tab 2">Content of Tab 2</Tab>
                <Tab title="Tab 3">Content of Tab 3</Tab>
            </Tabs>
            <Tabs id="tab2" defaultTabIndex={2} keepActiveTab>
                <Tab title="Tab A">Content of Tab A</Tab>
                <Tab title="Tab B">Content of Tab B</Tab>
                <Tab title="Tab C">Content of Tab C</Tab>
            </Tabs>
        </div>
    );
}
export default TabsDemo;

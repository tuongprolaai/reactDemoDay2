import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import styles from "./Tabs.module.scss";
import clsx from "clsx";
import { useSearchParams } from "react-router";

function Tabs({
    id,
    className,
    tabsClassName,
    defaultTabIndex,
    keepActiveTab = false,
    preserveContet = true,
    children,
}) {
    const [params, setParams] = useSearchParams();
    const [tabIndex, setTabIndex] = useState(() => {
        if (!keepActiveTab) return defaultTabIndex;
        return +params.get(id) ?? defaultTabIndex;
    });

    const tabs = React.Children.map(children, (tab) => {
        if (tab.type !== Tab)
            throw new Error("Children of <Tabs> must be <Tab>");
        return tab;
    });

    useEffect(() => {
        if (keepActiveTab) {
            if (!id)
                throw new Error(
                    "When using keepActiveTab it is required to pass id props.",
                );
        }
    }, [id, keepActiveTab]);

    useEffect(() => {
        if (!keepActiveTab) return;
        params.set(id, tabIndex);
        setParams(params);
    }, [id, params, tabIndex, keepActiveTab, defaultTabIndex, setParams]);

    const renderTabsContent = () => {
        if (preserveContet) {
            return tabs.map((tab, index) => {
                return (
                    <div hidden={index !== tabIndex} key={index}>
                        {tab.props.children}
                    </div>
                );
            });
        }
        return tabs[tabIndex].props.children;
    };

    return (
        <div className={clsx(styles.wrapper, className)}>
            <div className={clsx(styles.tabsList, tabsClassName)}>
                {tabs.map((tab, index) => (
                    <Tab
                        active={index === tabIndex}
                        key={index}
                        onClick={() => setTabIndex(index)}
                    >
                        {tab.props.title}
                    </Tab>
                ))}
            </div>

            <div className={styles.tabContent}>{renderTabsContent()}</div>
        </div>
    );
}

export default Tabs;

// 39-2:33:26

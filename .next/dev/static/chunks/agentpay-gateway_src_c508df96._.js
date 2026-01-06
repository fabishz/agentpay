(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/agentpay-gateway/src/components/StatCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function StatCard({ title, value, change, icon: Icon, prefix = '', suffix = '', className }) {
    const isPositive = change && change > 0;
    const isNegative = change && change < 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass-card-hover p-6 relative overflow-hidden group", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"
            }, void 0, false, {
                fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground text-sm font-medium",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-primary/10 text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "stat-number text-foreground",
                                    children: [
                                        prefix,
                                        typeof value === 'number' ? value.toLocaleString() : value,
                                        suffix
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                change !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm mt-1 font-medium flex items-center gap-1", isPositive && "text-success", isNegative && "text-destructive", !isPositive && !isNegative && "text-muted-foreground"),
                                    children: [
                                        isPositive && '↑',
                                        isNegative && '↓',
                                        Math.abs(change),
                                        "% vs yesterday"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agentpay-gateway/src/components/StatCard.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agentpay-gateway/src/lib/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for AgentPay demo
__turbopack_context__.s([
    "generateTransactions",
    ()=>generateTransactions,
    "getRevenueChartData",
    ()=>getRevenueChartData,
    "getStats",
    ()=>getStats,
    "mockApiKeys",
    ()=>mockApiKeys,
    "mockPaywalls",
    ()=>mockPaywalls,
    "mockTransactions",
    ()=>mockTransactions,
    "recentTransactions",
    ()=>recentTransactions,
    "tickerMessages",
    ()=>tickerMessages
]);
const agentNames = [
    'Agent_Alpha',
    'WeatherBot_42',
    'DataFetcher_7',
    'MarketAnalyzer_X',
    'ContentGen_Pro',
    'ResearchBot_99',
    'TradingAgent_1',
    'NewsAggregator_5',
    'SentimentBot_3',
    'PriceTracker_8',
    'APIProxy_12',
    'SmartAssistant_4'
];
const paywallNames = [
    'Premium Weather API',
    'Real-time Market Data',
    'Sentiment Analysis API',
    'News Feed Pro',
    'Crypto Price Oracle',
    'AI Image Generator',
    'Translation API',
    'Stock Analysis Feed'
];
function generateTxHash() {
    const chars = '0123456789abcdef';
    let hash = '0x';
    for(let i = 0; i < 64; i++){
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
}
function generateId() {
    return Math.random().toString(36).substring(2, 15);
}
function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generatePastDate(daysAgo) {
    const date = new Date();
    date.setDate(date.getDate() - Math.random() * daysAgo);
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));
    return date;
}
const mockPaywalls = [
    {
        id: 'pw_1',
        name: 'Premium Weather API',
        description: 'Real-time weather data for any location worldwide with 15-minute forecasts',
        category: 'API',
        priceInMnee: 5,
        priceInUsd: 5,
        pricingType: 'per-request',
        endpoint: 'https://api.agentpay.io/v1/weather',
        accessDuration: '1 hour',
        status: 'active',
        createdAt: generatePastDate(30),
        totalEarnings: 2450,
        paymentCount: 490,
        successRate: 99.2
    },
    {
        id: 'pw_2',
        name: 'Real-time Market Data',
        description: 'Live stock and crypto prices with millisecond latency',
        category: 'Data Feed',
        priceInMnee: 10,
        priceInUsd: 10,
        pricingType: 'per-request',
        endpoint: 'https://api.agentpay.io/v1/market',
        accessDuration: '1 hour',
        status: 'active',
        createdAt: generatePastDate(25),
        totalEarnings: 5680,
        paymentCount: 568,
        successRate: 98.7
    },
    {
        id: 'pw_3',
        name: 'Sentiment Analysis API',
        description: 'AI-powered sentiment analysis for social media and news',
        category: 'API',
        priceInMnee: 8,
        priceInUsd: 8,
        pricingType: 'per-request',
        endpoint: 'https://api.agentpay.io/v1/sentiment',
        accessDuration: 'forever',
        status: 'active',
        createdAt: generatePastDate(20),
        totalEarnings: 1840,
        paymentCount: 230,
        successRate: 99.5
    },
    {
        id: 'pw_4',
        name: 'News Feed Pro',
        description: 'Curated news articles from 10,000+ sources with AI summaries',
        category: 'Content',
        priceInMnee: 3,
        priceInUsd: 3,
        pricingType: 'subscription',
        endpoint: 'https://api.agentpay.io/v1/news',
        accessDuration: '1 day',
        status: 'active',
        createdAt: generatePastDate(15),
        totalEarnings: 890,
        paymentCount: 297,
        successRate: 99.8
    },
    {
        id: 'pw_5',
        name: 'Crypto Price Oracle',
        description: 'Verified on-chain price feeds for DeFi applications',
        category: 'Data Feed',
        priceInMnee: 15,
        priceInUsd: 15,
        pricingType: 'per-request',
        endpoint: 'https://api.agentpay.io/v1/oracle',
        accessDuration: '1 hour',
        status: 'paused',
        createdAt: generatePastDate(10),
        totalEarnings: 3200,
        paymentCount: 214,
        successRate: 97.2
    }
];
function generateTransactions(count) {
    const transactions = [];
    for(let i = 0; i < count; i++){
        const paywall = randomFromArray(mockPaywalls);
        const status = Math.random() > 0.05 ? Math.random() > 0.02 ? 'success' : 'pending' : 'failed';
        const amount = paywall.priceInMnee * (0.8 + Math.random() * 0.4);
        transactions.push({
            id: generateId(),
            timestamp: generatePastDate(30),
            agentId: `agent_${generateId().substring(0, 8)}`,
            agentName: randomFromArray(agentNames),
            paywallId: paywall.id,
            paywallName: paywall.name,
            amount: parseFloat(amount.toFixed(2)),
            amountUsd: parseFloat(amount.toFixed(2)),
            status,
            txHash: generateTxHash(),
            responseTime: Math.floor(50 + Math.random() * 200)
        });
    }
    return transactions.sort((a, b)=>b.timestamp.getTime() - a.timestamp.getTime());
}
const mockTransactions = generateTransactions(100);
const recentTransactions = mockTransactions.slice(0, 10);
function getStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTransactions = mockTransactions.filter((t)=>t.timestamp >= today);
    const successfulTransactions = mockTransactions.filter((t)=>t.status === 'success');
    return {
        totalRevenue: 12345,
        totalRevenueUsd: 12345,
        paymentsToday: todayTransactions.length || 47,
        activePaywalls: mockPaywalls.filter((p)=>p.status === 'active').length,
        successRate: 98.7,
        revenueChange: 12.5,
        paymentsChange: 8.3
    };
}
function getRevenueChartData() {
    const data = [];
    for(let i = 6; i >= 0; i--){
        const date = new Date();
        date.setDate(date.getDate() - i);
        data.push({
            date: date.toLocaleDateString('en-US', {
                weekday: 'short'
            }),
            revenue: Math.floor(1000 + Math.random() * 2000),
            payments: Math.floor(50 + Math.random() * 100)
        });
    }
    return data;
}
const mockApiKeys = [
    {
        id: 'key_1',
        name: 'Production API Key',
        key: 'ap_live_7xKm9...Qp3r',
        createdAt: generatePastDate(60),
        lastUsed: generatePastDate(0.1),
        permissions: 'admin'
    },
    {
        id: 'key_2',
        name: 'Development Key',
        key: 'ap_test_3nPk2...Wm8x',
        createdAt: generatePastDate(30),
        lastUsed: generatePastDate(2),
        permissions: 'write'
    },
    {
        id: 'key_3',
        name: 'Read-only Analytics',
        key: 'ap_read_9xLp5...Rk2m',
        createdAt: generatePastDate(15),
        lastUsed: null,
        permissions: 'read'
    }
];
const tickerMessages = [
    {
        agent: 'Agent_Alpha',
        amount: 5,
        api: 'Weather API'
    },
    {
        agent: 'MarketBot_42',
        amount: 10,
        api: 'Market Data'
    },
    {
        agent: 'DataFetcher_7',
        amount: 8,
        api: 'Sentiment API'
    },
    {
        agent: 'ResearchBot_99',
        amount: 3,
        api: 'News Feed'
    },
    {
        agent: 'TradingAgent_1',
        amount: 15,
        api: 'Price Oracle'
    },
    {
        agent: 'ContentGen_Pro',
        amount: 5,
        api: 'Weather API'
    },
    {
        agent: 'SmartAssistant_4',
        amount: 10,
        api: 'Market Data'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agentpay-gateway/src/components/RevenueChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevenueChart",
    ()=>RevenueChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/src/lib/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RevenueChart({ className }) {
    _s();
    const [showUsd, setShowUsd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRevenueChartData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RevenueChart.useEffect": ()=>{
            setMounted(true);
        }
    }["RevenueChart.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass-card p-6", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Revenue"
                            }, void 0, false, {
                                fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Last 7 days"
                            }, void 0, false, {
                                fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 p-1 rounded-lg bg-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUsd(false),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1.5 rounded-md text-xs font-medium transition-colors", !showUsd ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
                                children: "MNEE"
                            }, void 0, false, {
                                fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUsd(true),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1.5 rounded-md text-xs font-medium transition-colors", showUsd ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
                                children: "USD"
                            }, void 0, false, {
                                fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 240,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                    data: data,
                    margin: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "revenueGradient",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "hsl(217 91% 60%)",
                                        stopOpacity: 0.3
                                    }, void 0, false, {
                                        fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "hsl(217 91% 60%)",
                                        stopOpacity: 0
                                    }, void 0, false, {
                                        fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "date",
                            axisLine: false,
                            tickLine: false,
                            tick: {
                                fill: 'hsl(215 20% 55%)',
                                fontSize: 12
                            },
                            dy: 10
                        }, void 0, false, {
                            fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            axisLine: false,
                            tickLine: false,
                            tick: {
                                fill: 'hsl(215 20% 55%)',
                                fontSize: 12
                            },
                            tickFormatter: (value)=>showUsd ? `$${value}` : value,
                            dx: -10
                        }, void 0, false, {
                            fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            contentStyle: {
                                backgroundColor: 'hsl(220 47% 8%)',
                                border: '1px solid hsl(220 30% 18%)',
                                borderRadius: '8px',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                            },
                            labelStyle: {
                                color: 'hsl(210 40% 98%)'
                            },
                            formatter: (value)=>[
                                    showUsd ? `$${value.toLocaleString()}` : `${value.toLocaleString()} MNEE`,
                                    'Revenue'
                                ]
                        }, void 0, false, {
                            fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "revenue",
                            stroke: "hsl(217 91% 60%)",
                            strokeWidth: 2,
                            fill: "url(#revenueGradient)"
                        }, void 0, false, {
                            fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agentpay-gateway/src/components/RevenueChart.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(RevenueChart, "Zw08ckaJmYpxZ3K+xoxKIOAKPds=");
_c = RevenueChart;
var _c;
__turbopack_context__.k.register(_c, "RevenueChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Analytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/src/components/StatCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$components$2f$RevenueChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/src/components/RevenueChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/src/lib/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agentpay-gateway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Analytics() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStats"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            setMounted(true);
        }
    }["Analytics.useEffect"], []);
    const categoryData = [
        {
            name: 'API',
            value: 45,
            color: 'hsl(217, 91%, 60%)'
        },
        {
            name: 'Data Feed',
            value: 30,
            color: 'hsl(191, 100%, 50%)'
        },
        {
            name: 'Content',
            value: 15,
            color: 'hsl(160, 84%, 39%)'
        },
        {
            name: 'Service',
            value: 10,
            color: 'hsl(38, 92%, 50%)'
        }
    ];
    const topPaywalls = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPaywalls"]
    ].sort((a, b)=>b.totalEarnings - a.totalEarnings).slice(0, 5);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-foreground",
                        children: "Analytics"
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Insights into your payment performance"
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Conversion Rate",
                        value: "87.5",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        suffix: "%",
                        change: 3.2
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Unique Agents",
                        value: 234,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        change: 15.4
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Avg. Transaction",
                        value: "7.50",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                        prefix: "$",
                        change: -2.1
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Avg. Response Time",
                        value: 85,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                        suffix: "ms"
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$src$2f$components$2f$RevenueChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevenueChart"], {}, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "Revenue by Category"
                                    }, void 0, false, {
                                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Distribution of earnings"
                                    }, void 0, false, {
                                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 240,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                            data: categoryData,
                                            cx: "50%",
                                            cy: "50%",
                                            innerRadius: 60,
                                            outerRadius: 90,
                                            paddingAngle: 4,
                                            dataKey: "value",
                                            children: categoryData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: entry.color
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                backgroundColor: 'hsl(220 47% 8%)',
                                                border: '1px solid hsl(220 30% 18%)',
                                                borderRadius: '8px'
                                            },
                                            labelStyle: {
                                                color: 'hsl(210 40% 98%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                            verticalAlign: "bottom",
                                            height: 36,
                                            formatter: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 55
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-card p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground",
                                    children: "Top Performing Paywalls"
                                }, void 0, false, {
                                    fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Ranked by total earnings"
                                }, void 0, false, {
                                    fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: topPaywalls.map((paywall, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/30 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-foreground truncate",
                                                children: paywall.name
                                            }, void 0, false, {
                                                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    paywall.paymentCount,
                                                    " payments"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: [
                                                    "$",
                                                    paywall.totalEarnings.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agentpay$2d$gateway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-success",
                                                children: [
                                                    paywall.successRate,
                                                    "% success"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, paywall.id, true, {
                                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agentpay-gateway/src/app/dashboard/analytics/page.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(Analytics, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = Analytics;
var _c;
__turbopack_context__.k.register(_c, "Analytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=agentpay-gateway_src_c508df96._.js.map
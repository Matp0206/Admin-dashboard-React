//-----------------------|| DASHBOARD - TOTAL ORDER MONTH CHART ||-----------------------//

const chartData = {
    type: 'line',
    height: 90,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 1
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 100
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => 'Total Order'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'series1',
            data: [45, 66, 41, 89, 25, 44, 9, 54]
        }
    ]
};

const BajajAreaChartCard = () => {
    const classes = useStyles();
    const theme = useTheme();

    const orangeDark = theme.palette.secondary[800];

    React.useEffect(() => {
        const newSupportChart = {
            ...chartData.options,
            colors: [orangeDark],
            tooltip: {
                theme: 'light'
            }
        };
        ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    }, [orangeDark]);

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                                    Bajaj Finery
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                                    $1839.00
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
                            10% Profit
                        </Typography>
                    </Grid>
                </Grid>
                <Chart {...chartData} />
            </CardContent>
        </Card>
    );
};


export default chartData;

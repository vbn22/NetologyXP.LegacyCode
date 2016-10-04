// Избавляемся от зависимости ReportPluginObj

function formSetEditReport(idReport,ReportPluginObj) {
    var report = {
        'type': ReportPluginObj.defaultReportType,
        'format': ReportPluginObj.defaultReportFormat,
        'description': '',
        'period': ReportPluginObj.defaultPeriod,
        'hour': ReportPluginObj.defaultHour,
        'reports': []
    };

    if (idReport > 0) {
        report = ReportPluginObj.reportList[idReport];
        $('#report_submit').val(ReportPluginObj.updateReportString);
    }
    else {
        $('#report_submit').val(ReportPluginObj.createReportString);
    }

    toggleReportType(report.type);

    $('#report_description').html(report.description);
    $('#report_segment').find('option[value=' + report.idsegment + ']').prop('selected', 'selected');
    $('#report_type').find('option[value=' + report.type + ']').prop('selected', 'selected');
    $('#report_period').find('option[value=' + report.period + ']').prop('selected', 'selected');
    $('#report_hour').val(report.hour);
    $('[name=report_format].' + report.type + ' option[value=' + report.format + ']').prop('selected', 'selected');

    $('[name=reportsList] input').prop('checked', false);

    var key;
    for (key in report.reports) {
        $('.' + report.type + ' [report-unique-id=' + report.reports[key] + ']').prop('checked', 'checked');
    }

    updateReportParametersFunctions[report.type](report.parameters);

    $('#report_idreport').val(idReport);
}

//реальный вызов
formSetEditReport(idReport,ReportPlugin);

var ReportPluginTest = {
    'defaultReportType':'type',
    'defaultReportFormat':'format',
    'defaultPeriod':'period',
    'defaultHour':'hour',
    'updateReportString':'test',
    'createReportString':'test',
    'reportList': {}
}
// Тестовый вызов
formSetEditReport(idReport,ReportPluginTest);
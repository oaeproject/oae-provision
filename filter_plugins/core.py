def wrap(list):
    return [ '\'' + x + '\'' for x in list]

def elastic_config(list):
    return [ '{ host: ' + x + ', port: 9200 }' for x in list]

def etherpadify(list):
    return [ '{ host: ' + x + ', port: 9001 }' for x in list]

def ethercalcify(list):
    return [ '{ host: ' + x + ', port: 8000 }' for x in list]

class FilterModule(object):
    def filters(self):
        return {
            'wrap': wrap,
            'elastic_config': elastic_config,
            'etherpadify': etherpadify,
            'ethercalcify': ethercalcify
        }

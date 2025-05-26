"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var litegraphdb_1 = require("litegraphdb");
var api = new litegraphdb_1.LiteGraphSdk('http://ec2-18-217-169-161.us-east-2.compute.amazonaws.com:8701/', '5317813d-99b2-4236-8c24-9827f79338c7', 'litegraphadmin');
var guid = '00900db5-c9b7-4631-b250-c9e635a9036e'; // {String}
var nodeGuid = '0fa34090-46d5-4d6a-99dd-65a53f74f3c4'; // {String}
var toNodeGuid = '01010101-0101-0101-0101-010101010101';
var fromNodeGuid = '01010101-0101-0101-0101-010101010101';
var edgeGuid = 'cbabe93f-c4d5-40a9-b0ff-1ee596a4293f';
// region Graph
var getGraphById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Graph.read(guid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log('err:', JSON.stringify(err_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getGraphList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Graph.readAll()];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log('err:', JSON.stringify(err_2), err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createGraph = function () { return __awaiter(void 0, void 0, void 0, function () {
    var createdGraph, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Graph.create({ Name: 'New Graph' })];
            case 1:
                createdGraph = _a.sent();
                console.log(createdGraph, 'Graph created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log('err: ', err_3);
                console.log('Error creating graph:', JSON.stringify(err_3));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateGraph = function () { return __awaiter(void 0, void 0, void 0, function () {
    var graph, createdGraph, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                graph = {
                    GUID: '01010101-0101-0101-0101-010101010101',
                    Name: 'Sample Node',
                    CreatedUtc: '2024-10-19T14:35:20.351Z',
                    Data: {
                        key1: 'value2',
                    },
                    Labels: ['test'],
                    Tags: {
                        Type: 'ActiveDirectory',
                    },
                    Vectors: [],
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Graph.update(graph)];
            case 2:
                createdGraph = _a.sent();
                console.log(createdGraph, 'Graph created successfully');
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.log('Error creating graph:', JSON.stringify(err_4));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteGraphById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Graph.delete(guid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.log('err:', JSON.stringify(err_5));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var checkIfGraphExistsById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Graph.exists(guid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                console.log('err:', JSON.stringify(err_6));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var searchGraph = function () { return __awaiter(void 0, void 0, void 0, function () {
    var searchRequest, response, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRequest = {
                    GraphGUID: '01010101-0101-0101-0101-010101010101',
                    Ordering: 'CreatedDescending',
                    Expr: {
                        Left: 'Hello',
                        Operator: 'Equals',
                        Right: 'World',
                    },
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Graph.search(searchRequest)];
            case 2:
                response = _a.sent();
                console.log(response, 'Graph searched successfully');
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                console.log('Error searching graph:', JSON.stringify(err_7), err_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var exportGraphToGexf = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Graph.exportGexf('7f371867-cfd1-4f76-904d-682660dc91ec')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_8 = _a.sent();
                console.log('err:', JSON.stringify(err_8));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// region Node
var getNodeById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Node.read(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_9 = _a.sent();
                console.log('err:', JSON.stringify(err_9));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getNodeList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Node.readAll(guid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_10 = _a.sent();
                console.log('err:', JSON.stringify(err_10), err_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var node, createdNode, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                node = {
                    GUID: '01010101-0101-0101-0101-010101010101',
                    GraphGUID: '01010101-0101-0101-0101-010101010101',
                    Name: 'Sample Node',
                    Data: {
                        key1: 'value2',
                    },
                    CreatedUtc: '2024-10-19T14:35:20.351Z',
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Node.create(node)];
            case 2:
                createdNode = _a.sent();
                console.log(createdNode, 'Node created successfully');
                return [3 /*break*/, 4];
            case 3:
                err_11 = _a.sent();
                console.log('err: ', err_11);
                console.log('Error creating node:', JSON.stringify(err_11));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var multipleNodes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var newMultipleNodes, createdNode, err_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newMultipleNodes = [
                    {
                        Name: 'Active Directory',
                        Labels: ['test'],
                        Tags: {
                            Type: 'ActiveDirectory',
                        },
                        Data: {
                            Name: 'Active Directory',
                        },
                    },
                    {
                        Name: 'Website',
                        Labels: ['test'],
                        Tags: {
                            Type: 'Website',
                        },
                        Data: {
                            Name: 'Website',
                        },
                    },
                ];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Node.createBulk(guid, newMultipleNodes)];
            case 2:
                createdNode = _a.sent();
                console.log(createdNode, 'Node created successfully');
                return [3 /*break*/, 4];
            case 3:
                err_12 = _a.sent();
                console.log('err: ', err_12);
                console.log('Error creating node:', JSON.stringify(err_12));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var node, createdNode, err_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                node = {
                    GUID: '01010101-0101-0101-0101-010101010101',
                    GraphGUID: '01010101-0101-0101-0101-010101010101',
                    Name: 'Sample Node',
                    Data: {
                        key1: 'value2',
                    },
                    CreatedUtc: '2024-10-19T14:35:20.351Z',
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Node.update(node)];
            case 2:
                createdNode = _a.sent();
                console.log(createdNode, 'Node created successfully');
                return [3 /*break*/, 4];
            case 3:
                err_13 = _a.sent();
                console.log('Error creating node:', JSON.stringify(err_13));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteNodeById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_14;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Node.delete(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_14 = _a.sent();
                console.log('err:', JSON.stringify(err_14));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var checkIfNodeExistsById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_15;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Node.exists(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_15 = _a.sent();
                console.log('err:', JSON.stringify(err_15));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var searchNodes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var searchRequest, response, err_16;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRequest = {
                    GraphGUID: '00000000-0000-0000-0000-000000000000',
                    Ordering: 'CreatedDescending',
                    Expr: {
                        Left: 'Hello',
                        Operator: 'Equals',
                        Right: 'World',
                    },
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Node.search(searchRequest)];
            case 2:
                response = _a.sent();
                console.log(response, 'Graph searched successfully');
                return [3 /*break*/, 4];
            case 3:
                err_16 = _a.sent();
                console.log('Error searching graph:', JSON.stringify(err_16), err_16);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// region Edge
var getEdgeById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_17;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Edge.read(guid, edgeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_17 = _a.sent();
                console.log('err:', JSON.stringify(err_17));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getEdgeList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_18;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Edge.readAll(guid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_18 = _a.sent();
                console.log('err:', JSON.stringify(err_18), err_18);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createEdge = function () { return __awaiter(void 0, void 0, void 0, function () {
    var edge, createdEdge, err_19;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                edge = {
                    GraphGUID: '00000000-0000-0000-0000-000000000000',
                    Name: 'My test edge',
                    From: '2b1520be-d285-4f22-8c74-f296047162b9',
                    To: '784cfa37-fb06-4f81-b10d-f1167dfe2b22',
                    Cost: 10,
                    Data: {
                        Hello: 'World',
                    },
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Edge.create(edge)];
            case 2:
                createdEdge = _a.sent();
                console.log(createdEdge, 'Edge created successfully');
                return [3 /*break*/, 4];
            case 3:
                err_19 = _a.sent();
                console.log('err: ', err_19);
                console.log('Error creating edge:', JSON.stringify(err_19));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateEdge = function () { return __awaiter(void 0, void 0, void 0, function () {
    var edge, createdEdge, err_20;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                edge = {
                    GUID: '01010101-0101-0101-0101-010101010101',
                    GraphGUID: '01010101-0101-0101-0101-010101010101',
                    Name: 'My test edge',
                    From: '2b1520be-d285-4f22-8c74-f296047162b9',
                    To: '784cfa37-fb06-4f81-b10d-f1167dfe2b22',
                    Cost: 10,
                    Data: {
                        Hello: 'World',
                    },
                    CreatedUtc: '2024-07-01 15:43:06.991834',
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Edge.update(edge)];
            case 2:
                createdEdge = _a.sent();
                console.log(createdEdge, 'Edge created successfully');
                return [3 /*break*/, 4];
            case 3:
                err_20 = _a.sent();
                console.log('Error creating edge:', JSON.stringify(err_20));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteEdgeById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_21;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Edge.delete(guid, edgeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_21 = _a.sent();
                console.log('err:', JSON.stringify(err_21));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var checkIfEdgeExistsById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_22;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Edge.exists(guid, edgeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_22 = _a.sent();
                console.log('err:', JSON.stringify(err_22));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var searchEdges = function () { return __awaiter(void 0, void 0, void 0, function () {
    var searchRequest, response, err_23;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRequest = {
                    GraphGUID: '01010101-0101-0101-0101-010101010101',
                    Ordering: 'CreatedDescending',
                    Expr: {
                        Left: 'Hello',
                        Operator: 'Equals',
                        Right: 'World',
                    },
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Edge.search(searchRequest)];
            case 2:
                response = _a.sent();
                console.log(response, 'Graph searched successfully');
                return [3 /*break*/, 4];
            case 3:
                err_23 = _a.sent();
                console.log('Error searching graph:', JSON.stringify(err_23), err_23);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
//region Routes & Traversal
var getEdgesFromNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_24;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getEdgesFromNode(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_24 = _a.sent();
                console.log('err:', JSON.stringify(err_24), err_24);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getEdgesToNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_25;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getEdgesToNode(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_25 = _a.sent();
                console.log('err:', JSON.stringify(err_25), err_25);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getEdgesBetween = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_26;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getEdgesBetween(guid, fromNodeGuid, toNodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_26 = _a.sent();
                console.log('err:', JSON.stringify(err_26), err_26);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getAllNodeEdges = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_27;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getAllNodeEdges(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_27 = _a.sent();
                console.log('err:', JSON.stringify(err_27), err_27);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getChildrenFromNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_28;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getChildrenFromNode(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_28 = _a.sent();
                console.log('err:', JSON.stringify(err_28), err_28);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getParentsFromNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_29;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getParentsFromNode(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_29 = _a.sent();
                console.log('err:', JSON.stringify(err_29), err_29);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getNodeNeighbors = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_30;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getNodeNeighbors(guid, nodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_30 = _a.sent();
                console.log('err:', JSON.stringify(err_30), err_30);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getRoutes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_31;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Route.getRoutes(guid, fromNodeGuid, toNodeGuid)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_31 = _a.sent();
                console.log('err:', JSON.stringify(err_31), err_31);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteMultipleNodes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_32;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Node.deleteBulk(guid, ['a8s7d87asd', '7a6sd8767ad'])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_32 = _a.sent();
                console.log('err:', JSON.stringify(err_32), err_32);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//endregion
//region User
var readAllUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_33;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.User.readAll()];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_33 = _a.sent();
                console.log('err:', JSON.stringify(err_33));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var readUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_34;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.User.read('00000000-0000-0000-0000-000000000000')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_34 = _a.sent();
                console.log('err:', JSON.stringify(err_34));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_35;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.User.create({
                        FirstName: 'Another',
                        LastName: 'User',
                        Email: 'another@user.com',
                        Password: 'password',
                        Active: true,
                    })];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_35 = _a.sent();
                console.log('err:', JSON.stringify(err_35));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var existsUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_36;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.User.exists('00000000-0000-0000-0000-000000000000')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_36 = _a.sent();
                console.log('err:', JSON.stringify(err_36));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_37;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.User.update({
                        GUID: 'eda4872a-fe66-475c-9c33-4b50ec14de0d',
                        FirstName: 'Again Updated',
                        LastName: 'User',
                        Email: 'anotherbbb@user.com',
                        Password: 'password',
                        Active: true,
                    })];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_37 = _a.sent();
                console.log('err:', JSON.stringify(err_37));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_38;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.User.delete('eda4872a-fe66-475c-9c33-4b50ec14de0d')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_38 = _a.sent();
                console.log('err:', JSON.stringify(err_38));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//endregion
//region Tenant
var readTenants = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_39;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tenant.readAll()];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_39 = _a.sent();
                console.log('err:', JSON.stringify(err_39));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var readTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_40;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tenant.read('00000000-0000-0000-0000-000000000000')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_40 = _a.sent();
                console.log('err:', JSON.stringify(err_40));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_41;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tenant.create({
                        Name: 'Another tenant',
                        Active: true,
                    })];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_41 = _a.sent();
                console.log('err:', JSON.stringify(err_41));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var tenantExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_42;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tenant.exists('00000000-0000-0000-0000-000000000000')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_42 = _a.sent();
                console.log('err:', JSON.stringify(err_42));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_43;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tenant.update({
                        GUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'Updated tenant',
                        Active: true,
                    })];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_43 = _a.sent();
                console.log('err:', JSON.stringify(err_43));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_44;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tenant.delete('0a28221b-fa65-430d-8b29-158546639347')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_44 = _a.sent();
                console.log('err:', JSON.stringify(err_44));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteForceTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_45;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tenant.delete('db548e9f-32bf-4fe0-9be1-a629b26fed0b', true)];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_45 = _a.sent();
                console.log('err:', JSON.stringify(err_45));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//endregion
//region Credentials
var readAllCredentials = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_46;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Credential.readAll()];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_46 = _a.sent();
                console.log('err:', JSON.stringify(err_46));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var readCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_47;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Credential.read('bcce2a7c-d102-42e2-97d4-a449f470f57c')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_47 = _a.sent();
                console.log('err:', JSON.stringify(err_47));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var credential, data, err_48;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                credential = {
                    UserGUID: '00000000-0000-0000-0000-000000000000',
                    Name: 'New credential',
                    BearerToken: 'foobar',
                    Active: true,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.Credential.create(credential)];
            case 2:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 4];
            case 3:
                err_48 = _a.sent();
                console.log('err:', JSON.stringify(err_48));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var existsCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_49;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Credential.exists('bcce2a7c-d102-42e2-97d4-a449f470f57c')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_49 = _a.sent();
                console.log('err:', JSON.stringify(err_49));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_50;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Credential.update({
                        UserGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'Updated credential',
                        BearerToken: 'default',
                        Active: true,
                    }, 'bcce2a7c-d102-42e2-97d4-a449f470f57c')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_50 = _a.sent();
                console.log('err:', JSON.stringify(err_50));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_51;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Credential.delete('1f4ac56e-69da-49b3-8bd5-e29a639d6392')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_51 = _a.sent();
                console.log('err:', JSON.stringify(err_51));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//endregion
//region Labels
var readAllLabels = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_52;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.readAll()];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_52 = _a.sent();
                console.log('err:', JSON.stringify(err_52));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var readLabel = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_53;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.read('a051c94d-90f9-4471-8e03-5234c4f4f061')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_53 = _a.sent();
                console.log('err:', JSON.stringify(err_53));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createLabel = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_54;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.create({
                        GraphGUID: '00000000-0000-0000-0000-000000000000',
                        NodeGUID: '00000000-0000-0000-0000-000000000000',
                        Label: 'test',
                        EdgeGUID: null,
                    })];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_54 = _a.sent();
                console.log('err:', JSON.stringify(err_54));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var existsLabel = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_55;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.exists('a051c94d-90f9-4471-8e03-5234c4f4f061')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_55 = _a.sent();
                console.log('err:', JSON.stringify(err_55));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateLabel = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_56;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.update({
                        GUID: 'a051c94d-90f9-4471-8e03-5234c4f4f061',
                        GraphGUID: '00000000-0000-0000-0000-000000000000',
                        NodeGUID: '00000000-0000-0000-0000-000000000000',
                        Label: 'updatedkey',
                        EdgeGUID: '00000000-0000-0000-0000-000000000000',
                        CreatedUtc: '2024-12-27T18:12:38.653402Z',
                        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
                    })];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_56 = _a.sent();
                console.log('err:', JSON.stringify(err_56));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteLabel = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_57;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.delete('a169ec1d-bbc9-4538-90f5-2c1fbf281282')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_57 = _a.sent();
                console.log('err:', JSON.stringify(err_57));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//endregion
//region Tag
var readAllTags = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_58;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.readAll()];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_58 = _a.sent();
                console.log('err:', JSON.stringify(err_58));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var readTag = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_59;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.read('461c0b76-b7ae-4a6f-8b25-50c78239ecce')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_59 = _a.sent();
                console.log('err:', JSON.stringify(err_59));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createTag = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_60;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.create({
                        GraphGUID: '00000000-0000-0000-0000-000000000000',
                        NodeGUID: '158c634b-53d2-4a60-be87-61c39c990451',
                        EdgeGUID: 'cdf28e4f-9a28-4a70-b246-e3ae9ccb35d6',
                        Key: 'mykey',
                        Value: 'myvalue',
                    })];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_60 = _a.sent();
                console.log('err:', JSON.stringify(err_60));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var existsTag = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_61;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.exists('461c0b76-b7ae-4a6f-8b25-50c78239ecce')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_61 = _a.sent();
                console.log('err:', JSON.stringify(err_61));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateTag = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_62;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.update({
                        Key: 'updatedkey',
                        Value: 'myvalue',
                        CreatedUtc: '2024-12-27T18:12:38.653402Z',
                        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
                    }, 'fa3d7a1b-7bad-4d7b-b0dc-93bb42872651')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_62 = _a.sent();
                console.log('err:', JSON.stringify(err_62));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteTag = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_63;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.delete('3e49bc06-8fb6-41f1-8bb4-1a4af6319264')];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_63 = _a.sent();
                console.log('err:', JSON.stringify(err_63));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createMultipleTags = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_64;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.createBulk([
                        {
                            GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
                            NodeGUID: null,
                            EdgeGUID: null,
                            Key: 'mykey test',
                            Value: 'myvalue test',
                        },
                        {
                            GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
                            NodeGUID: null,
                            EdgeGUID: null,
                            Key: 'mykey test 2',
                            Value: 'myvalue test 2',
                        },
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_64 = _a.sent();
                console.log('err:', JSON.stringify(err_64));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createMultipleTags();
var deleteMultipleTags = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_65;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Tag.deleteBulk([
                        '4cbfe0cd-13b9-426c-8a6b-84e77abe8f6d',
                        'dc0c1298-3f79-4c6e-ac25-7491eb8a5b25',
                        '5618fe18-47f1-43eb-abae-96ba6a88b341',
                        '445369d4-b6d8-465e-9a46-c7109b085d39',
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_65 = _a.sent();
                console.log('err:', JSON.stringify(err_65));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteMultipleTags();
var deleteMultipleVectors = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_66;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Vector.deleteBulk(['ff9d5654-654c-41e7-a5c8-50a1963de72c'])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_66 = _a.sent();
                console.log('err:', JSON.stringify(err_66));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteMultipleVectors();
var createMultipleVectors = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_67;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Vector.createBulk([
                        {
                            GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
                            NodeGUID: null,
                            EdgeGUID: null,
                            Model: 'all-MiniLM-L6-v2',
                            Dimensionality: 384,
                            Content: 'test',
                            Vectors: [0.1, 0.2, 0.3],
                        },
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_67 = _a.sent();
                console.log('err:', JSON.stringify(err_67));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createMultipleVectors();
var createMultipleLabels = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_68;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.createBulk([
                        {
                            GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
                            NodeGUID: null,
                            EdgeGUID: null,
                            Label: 'label multiple',
                        },
                        {
                            GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
                            NodeGUID: null,
                            EdgeGUID: null,
                            Label: 'label multiple 2',
                        },
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_68 = _a.sent();
                console.log('err:', JSON.stringify(err_68));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createMultipleLabels();
var deleteMultipleLabels = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_69;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Label.deleteBulk([
                        '33c8c905-b78b-4548-98ff-af0197d5fa97',
                        '96d4f123-a265-4c60-aef1-664a5ed0d7df',
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_69 = _a.sent();
                console.log('err:', JSON.stringify(err_69));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteMultipleLabels();
var createMultipleNodes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_70;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Node.createBulk('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
                        {
                            Name: 'Active Directory',
                            Labels: ['test'],
                            Tags: {
                                Type: 'ActiveDirectory',
                            },
                            Data: {
                                Name: 'Active Directory',
                            },
                        },
                        {
                            Name: 'Website',
                            Labels: ['test'],
                            Tags: {
                                Type: 'Website',
                            },
                            Data: {
                                Name: 'Website',
                            },
                        },
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_70 = _a.sent();
                console.log('err:', JSON.stringify(err_70));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createMultipleNodes();
var deleteMultipleNodes2 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_71;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Node.deleteBulk('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
                        'a204853e-5ba1-4795-9a2b-46349847f92f',
                        '76df872f-a138-4e28-9cd0-95941c6fd657',
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_71 = _a.sent();
                console.log('err:', JSON.stringify(err_71));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteMultipleNodes2();
var createMultipleEdges = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_72;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Edge.createBulk('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
                        {
                            Name: 'DigitalOcean to Control Plane',
                            From: 'a76c18ed-78be-4666-858a-5154350240d8',
                            To: '768191c0-0d4d-4be0-a13e-a5c9cabdaa46',
                            Cost: 100,
                            Labels: ['test'],
                            Tags: {
                                type: 'edge',
                                test: 'true',
                            },
                            Data: {
                                hello: 'world',
                            },
                        },
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_72 = _a.sent();
                console.log('err:', JSON.stringify(err_72));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createMultipleEdges();
var deleteMultipleEdges = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_73;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.Edge.deleteBulk('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
                        'a76c18ed-78be-4666-858a-5154350240d8',
                    ])];
            case 1:
                data = _a.sent();
                console.log(data, 'chk data');
                return [3 /*break*/, 3];
            case 2:
                err_73 = _a.sent();
                console.log('err:', JSON.stringify(err_73));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
deleteMultipleEdges();
var useSdk = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //region Graph calls
            return [4 /*yield*/, getGraphById()];
            case 1:
                //region Graph calls
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
useSdk();

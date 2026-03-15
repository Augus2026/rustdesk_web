import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "hbb";
export declare enum ConnType {
    DEFAULT_CONN = 0,
    FILE_TRANSFER = 1,
    PORT_FORWARD = 2,
    RDP = 3,
    VIEW_CAMERA = 4,
    TERMINAL = 5,
    UNRECOGNIZED = -1
}
export declare function connTypeFromJSON(object: any): ConnType;
export declare function connTypeToJSON(object: ConnType): string;
export declare enum NatType {
    UNKNOWN_NAT = 0,
    ASYMMETRIC = 1,
    SYMMETRIC = 2,
    UNRECOGNIZED = -1
}
export declare function natTypeFromJSON(object: any): NatType;
export declare function natTypeToJSON(object: NatType): string;
export interface RegisterPeer {
    id: string;
    serial: number;
}
export interface RegisterPeerResponse {
    request_pk: boolean;
}
export interface PunchHoleRequest {
    id: string;
    nat_type: NatType;
    licence_key: string;
    conn_type: ConnType;
    token: string;
    version: string;
    udp_port: number;
    force_relay: boolean;
    upnp_port: number;
    socket_addr_v6: Uint8Array;
}
export interface ControlPermissions {
    permissions: number;
}
export declare enum ControlPermissions_Permission {
    keyboard = 0,
    remote_printer = 1,
    clipboard = 2,
    file = 3,
    audio = 4,
    camera = 5,
    terminal = 6,
    tunnel = 7,
    restart = 8,
    recording = 9,
    block_input = 10,
    remote_modify = 11,
    UNRECOGNIZED = -1
}
export declare function controlPermissions_PermissionFromJSON(object: any): ControlPermissions_Permission;
export declare function controlPermissions_PermissionToJSON(object: ControlPermissions_Permission): string;
export interface PunchHole {
    socket_addr: Uint8Array;
    relay_server: string;
    nat_type: NatType;
    udp_port: number;
    force_relay: boolean;
    upnp_port: number;
    socket_addr_v6: Uint8Array;
    control_permissions: ControlPermissions | undefined;
}
export interface TestNatRequest {
    serial: number;
}
/** per my test, uint/int has no difference in encoding, int not good for negative, use sint for negative */
export interface TestNatResponse {
    port: number;
    /** for mobile */
    cu: ConfigUpdate | undefined;
}
export interface PunchHoleSent {
    socket_addr: Uint8Array;
    id: string;
    relay_server: string;
    nat_type: NatType;
    version: string;
    upnp_port: number;
    socket_addr_v6: Uint8Array;
}
export interface RegisterPk {
    id: string;
    uuid: Uint8Array;
    pk: Uint8Array;
    old_id: string;
    no_register_device: boolean;
}
export interface RegisterPkResponse {
    result: RegisterPkResponse_Result;
    keep_alive: number;
}
export declare enum RegisterPkResponse_Result {
    OK = 0,
    UUID_MISMATCH = 2,
    ID_EXISTS = 3,
    TOO_FREQUENT = 4,
    INVALID_ID_FORMAT = 5,
    NOT_SUPPORT = 6,
    SERVER_ERROR = 7,
    UNRECOGNIZED = -1
}
export declare function registerPkResponse_ResultFromJSON(object: any): RegisterPkResponse_Result;
export declare function registerPkResponse_ResultToJSON(object: RegisterPkResponse_Result): string;
export interface PunchHoleResponse {
    socket_addr: Uint8Array;
    pk: Uint8Array;
    failure: PunchHoleResponse_Failure;
    relay_server: string;
    nat_type?: NatType | undefined;
    is_local?: boolean | undefined;
    other_failure: string;
    feedback: number;
    is_udp: boolean;
    upnp_port: number;
    socket_addr_v6: Uint8Array;
}
export declare enum PunchHoleResponse_Failure {
    ID_NOT_EXIST = 0,
    OFFLINE = 2,
    LICENSE_MISMATCH = 3,
    LICENSE_OVERUSE = 4,
    UNRECOGNIZED = -1
}
export declare function punchHoleResponse_FailureFromJSON(object: any): PunchHoleResponse_Failure;
export declare function punchHoleResponse_FailureToJSON(object: PunchHoleResponse_Failure): string;
export interface ConfigUpdate {
    serial: number;
    rendezvous_servers: string[];
}
export interface RequestRelay {
    id: string;
    uuid: string;
    socket_addr: Uint8Array;
    relay_server: string;
    secure: boolean;
    licence_key: string;
    conn_type: ConnType;
    token: string;
    control_permissions: ControlPermissions | undefined;
}
export interface RelayResponse {
    socket_addr: Uint8Array;
    uuid: string;
    relay_server: string;
    id?: string | undefined;
    pk?: Uint8Array | undefined;
    refuse_reason: string;
    version: string;
    feedback: number;
    socket_addr_v6: Uint8Array;
    upnp_port: number;
}
export interface SoftwareUpdate {
    url: string;
}
/**
 * if in same intranet, punch hole won't work both for udp and tcp,
 * even some router has below connection error if we connect itself,
 *  { kind: Other, error: "could not resolve to any address" },
 * so we request local address to connect.
 */
export interface FetchLocalAddr {
    socket_addr: Uint8Array;
    relay_server: string;
    socket_addr_v6: Uint8Array;
    control_permissions: ControlPermissions | undefined;
}
export interface LocalAddr {
    socket_addr: Uint8Array;
    local_addr: Uint8Array;
    relay_server: string;
    id: string;
    version: string;
    socket_addr_v6: Uint8Array;
}
export interface PeerDiscovery {
    cmd: string;
    mac: string;
    id: string;
    username: string;
    hostname: string;
    platform: string;
    misc: string;
}
export interface OnlineRequest {
    id: string;
    peers: string[];
}
export interface OnlineResponse {
    states: Uint8Array;
}
export interface KeyExchange {
    keys: Uint8Array[];
}
export interface HealthCheck {
    token: string;
}
export interface RendezvousMessage {
    register_peer?: RegisterPeer | undefined;
    register_peer_response?: RegisterPeerResponse | undefined;
    punch_hole_request?: PunchHoleRequest | undefined;
    punch_hole?: PunchHole | undefined;
    punch_hole_sent?: PunchHoleSent | undefined;
    punch_hole_response?: PunchHoleResponse | undefined;
    fetch_local_addr?: FetchLocalAddr | undefined;
    local_addr?: LocalAddr | undefined;
    configure_update?: ConfigUpdate | undefined;
    register_pk?: RegisterPk | undefined;
    register_pk_response?: RegisterPkResponse | undefined;
    software_update?: SoftwareUpdate | undefined;
    request_relay?: RequestRelay | undefined;
    relay_response?: RelayResponse | undefined;
    test_nat_request?: TestNatRequest | undefined;
    test_nat_response?: TestNatResponse | undefined;
    peer_discovery?: PeerDiscovery | undefined;
    online_request?: OnlineRequest | undefined;
    online_response?: OnlineResponse | undefined;
    key_exchange?: KeyExchange | undefined;
    hc?: HealthCheck | undefined;
}
export declare const RegisterPeer: {
    encode(message: RegisterPeer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPeer;
    fromJSON(object: any): RegisterPeer;
    toJSON(message: RegisterPeer): unknown;
    create<I extends Exact<DeepPartial<RegisterPeer>, I>>(base?: I): RegisterPeer;
    fromPartial<I extends Exact<DeepPartial<RegisterPeer>, I>>(object: I): RegisterPeer;
};
export declare const RegisterPeerResponse: {
    encode(message: RegisterPeerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPeerResponse;
    fromJSON(object: any): RegisterPeerResponse;
    toJSON(message: RegisterPeerResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterPeerResponse>, I>>(base?: I): RegisterPeerResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterPeerResponse>, I>>(object: I): RegisterPeerResponse;
};
export declare const PunchHoleRequest: {
    encode(message: PunchHoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PunchHoleRequest;
    fromJSON(object: any): PunchHoleRequest;
    toJSON(message: PunchHoleRequest): unknown;
    create<I extends Exact<DeepPartial<PunchHoleRequest>, I>>(base?: I): PunchHoleRequest;
    fromPartial<I extends Exact<DeepPartial<PunchHoleRequest>, I>>(object: I): PunchHoleRequest;
};
export declare const ControlPermissions: {
    encode(message: ControlPermissions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControlPermissions;
    fromJSON(object: any): ControlPermissions;
    toJSON(message: ControlPermissions): unknown;
    create<I extends Exact<DeepPartial<ControlPermissions>, I>>(base?: I): ControlPermissions;
    fromPartial<I extends Exact<DeepPartial<ControlPermissions>, I>>(object: I): ControlPermissions;
};
export declare const PunchHole: {
    encode(message: PunchHole, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PunchHole;
    fromJSON(object: any): PunchHole;
    toJSON(message: PunchHole): unknown;
    create<I extends Exact<DeepPartial<PunchHole>, I>>(base?: I): PunchHole;
    fromPartial<I extends Exact<DeepPartial<PunchHole>, I>>(object: I): PunchHole;
};
export declare const TestNatRequest: {
    encode(message: TestNatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestNatRequest;
    fromJSON(object: any): TestNatRequest;
    toJSON(message: TestNatRequest): unknown;
    create<I extends Exact<DeepPartial<TestNatRequest>, I>>(base?: I): TestNatRequest;
    fromPartial<I extends Exact<DeepPartial<TestNatRequest>, I>>(object: I): TestNatRequest;
};
export declare const TestNatResponse: {
    encode(message: TestNatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestNatResponse;
    fromJSON(object: any): TestNatResponse;
    toJSON(message: TestNatResponse): unknown;
    create<I extends Exact<DeepPartial<TestNatResponse>, I>>(base?: I): TestNatResponse;
    fromPartial<I extends Exact<DeepPartial<TestNatResponse>, I>>(object: I): TestNatResponse;
};
export declare const PunchHoleSent: {
    encode(message: PunchHoleSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PunchHoleSent;
    fromJSON(object: any): PunchHoleSent;
    toJSON(message: PunchHoleSent): unknown;
    create<I extends Exact<DeepPartial<PunchHoleSent>, I>>(base?: I): PunchHoleSent;
    fromPartial<I extends Exact<DeepPartial<PunchHoleSent>, I>>(object: I): PunchHoleSent;
};
export declare const RegisterPk: {
    encode(message: RegisterPk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPk;
    fromJSON(object: any): RegisterPk;
    toJSON(message: RegisterPk): unknown;
    create<I extends Exact<DeepPartial<RegisterPk>, I>>(base?: I): RegisterPk;
    fromPartial<I extends Exact<DeepPartial<RegisterPk>, I>>(object: I): RegisterPk;
};
export declare const RegisterPkResponse: {
    encode(message: RegisterPkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPkResponse;
    fromJSON(object: any): RegisterPkResponse;
    toJSON(message: RegisterPkResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterPkResponse>, I>>(base?: I): RegisterPkResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterPkResponse>, I>>(object: I): RegisterPkResponse;
};
export declare const PunchHoleResponse: {
    encode(message: PunchHoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PunchHoleResponse;
    fromJSON(object: any): PunchHoleResponse;
    toJSON(message: PunchHoleResponse): unknown;
    create<I extends Exact<DeepPartial<PunchHoleResponse>, I>>(base?: I): PunchHoleResponse;
    fromPartial<I extends Exact<DeepPartial<PunchHoleResponse>, I>>(object: I): PunchHoleResponse;
};
export declare const ConfigUpdate: {
    encode(message: ConfigUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigUpdate;
    fromJSON(object: any): ConfigUpdate;
    toJSON(message: ConfigUpdate): unknown;
    create<I extends Exact<DeepPartial<ConfigUpdate>, I>>(base?: I): ConfigUpdate;
    fromPartial<I extends Exact<DeepPartial<ConfigUpdate>, I>>(object: I): ConfigUpdate;
};
export declare const RequestRelay: {
    encode(message: RequestRelay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestRelay;
    fromJSON(object: any): RequestRelay;
    toJSON(message: RequestRelay): unknown;
    create<I extends Exact<DeepPartial<RequestRelay>, I>>(base?: I): RequestRelay;
    fromPartial<I extends Exact<DeepPartial<RequestRelay>, I>>(object: I): RequestRelay;
};
export declare const RelayResponse: {
    encode(message: RelayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayResponse;
    fromJSON(object: any): RelayResponse;
    toJSON(message: RelayResponse): unknown;
    create<I extends Exact<DeepPartial<RelayResponse>, I>>(base?: I): RelayResponse;
    fromPartial<I extends Exact<DeepPartial<RelayResponse>, I>>(object: I): RelayResponse;
};
export declare const SoftwareUpdate: {
    encode(message: SoftwareUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SoftwareUpdate;
    fromJSON(object: any): SoftwareUpdate;
    toJSON(message: SoftwareUpdate): unknown;
    create<I extends Exact<DeepPartial<SoftwareUpdate>, I>>(base?: I): SoftwareUpdate;
    fromPartial<I extends Exact<DeepPartial<SoftwareUpdate>, I>>(object: I): SoftwareUpdate;
};
export declare const FetchLocalAddr: {
    encode(message: FetchLocalAddr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FetchLocalAddr;
    fromJSON(object: any): FetchLocalAddr;
    toJSON(message: FetchLocalAddr): unknown;
    create<I extends Exact<DeepPartial<FetchLocalAddr>, I>>(base?: I): FetchLocalAddr;
    fromPartial<I extends Exact<DeepPartial<FetchLocalAddr>, I>>(object: I): FetchLocalAddr;
};
export declare const LocalAddr: {
    encode(message: LocalAddr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalAddr;
    fromJSON(object: any): LocalAddr;
    toJSON(message: LocalAddr): unknown;
    create<I extends Exact<DeepPartial<LocalAddr>, I>>(base?: I): LocalAddr;
    fromPartial<I extends Exact<DeepPartial<LocalAddr>, I>>(object: I): LocalAddr;
};
export declare const PeerDiscovery: {
    encode(message: PeerDiscovery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerDiscovery;
    fromJSON(object: any): PeerDiscovery;
    toJSON(message: PeerDiscovery): unknown;
    create<I extends Exact<DeepPartial<PeerDiscovery>, I>>(base?: I): PeerDiscovery;
    fromPartial<I extends Exact<DeepPartial<PeerDiscovery>, I>>(object: I): PeerDiscovery;
};
export declare const OnlineRequest: {
    encode(message: OnlineRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnlineRequest;
    fromJSON(object: any): OnlineRequest;
    toJSON(message: OnlineRequest): unknown;
    create<I extends Exact<DeepPartial<OnlineRequest>, I>>(base?: I): OnlineRequest;
    fromPartial<I extends Exact<DeepPartial<OnlineRequest>, I>>(object: I): OnlineRequest;
};
export declare const OnlineResponse: {
    encode(message: OnlineResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnlineResponse;
    fromJSON(object: any): OnlineResponse;
    toJSON(message: OnlineResponse): unknown;
    create<I extends Exact<DeepPartial<OnlineResponse>, I>>(base?: I): OnlineResponse;
    fromPartial<I extends Exact<DeepPartial<OnlineResponse>, I>>(object: I): OnlineResponse;
};
export declare const KeyExchange: {
    encode(message: KeyExchange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyExchange;
    fromJSON(object: any): KeyExchange;
    toJSON(message: KeyExchange): unknown;
    create<I extends Exact<DeepPartial<KeyExchange>, I>>(base?: I): KeyExchange;
    fromPartial<I extends Exact<DeepPartial<KeyExchange>, I>>(object: I): KeyExchange;
};
export declare const HealthCheck: {
    encode(message: HealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck;
    fromJSON(object: any): HealthCheck;
    toJSON(message: HealthCheck): unknown;
    create<I extends Exact<DeepPartial<HealthCheck>, I>>(base?: I): HealthCheck;
    fromPartial<I extends Exact<DeepPartial<HealthCheck>, I>>(object: I): HealthCheck;
};
export declare const RendezvousMessage: {
    encode(message: RendezvousMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RendezvousMessage;
    fromJSON(object: any): RendezvousMessage;
    toJSON(message: RendezvousMessage): unknown;
    create<I extends Exact<DeepPartial<RendezvousMessage>, I>>(base?: I): RendezvousMessage;
    fromPartial<I extends Exact<DeepPartial<RendezvousMessage>, I>>(object: I): RendezvousMessage;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
//# sourceMappingURL=rendezvous.d.ts.map
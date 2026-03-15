/**
 * RustDesk Protobuf TypeScript Definitions
 * Generated from hbb_common/protos
 *
 * message.proto - Main message definitions
 * rendezvous.proto - Connection/rendezvous protocol
 */

// Export all protobuf types from message.proto
export * from './message';

// Export rendezvous-specific types (excluding common utility types from message)
export {
  ConnType,
  connTypeFromJSON,
  connTypeToJSON,
  NatType,
  natTypeFromJSON,
  natTypeToJSON,
  RegisterPeer,
  RegisterPeerResponse,
  PunchHoleRequest,
  ControlPermissions,
  ControlPermissions_Permission,
  controlPermissions_PermissionFromJSON,
  controlPermissions_PermissionToJSON,
  PunchHole,
  TestNatRequest,
  TestNatResponse,
  PunchHoleSent,
  RegisterPk,
  RegisterPkResponse,
  RegisterPkResponse_Result,
  registerPkResponse_ResultFromJSON,
  registerPkResponse_ResultToJSON,
  PunchHoleResponse,
  PunchHoleResponse_Failure,
  punchHoleResponse_FailureFromJSON,
  punchHoleResponse_FailureToJSON,
  ConfigUpdate,
  RequestRelay,
  RelayResponse,
  SoftwareUpdate,
  FetchLocalAddr,
  LocalAddr,
  PeerDiscovery,
  OnlineRequest,
  OnlineResponse,
  KeyExchange,
  HealthCheck,
  RendezvousMessage
} from './rendezvous';

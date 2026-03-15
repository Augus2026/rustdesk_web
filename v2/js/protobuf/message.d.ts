import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "hbb";
export declare enum Chroma {
    I420 = 0,
    I444 = 1,
    UNRECOGNIZED = -1
}
export declare function chromaFromJSON(object: any): Chroma;
export declare function chromaToJSON(object: Chroma): string;
export declare enum KeyboardMode {
    Legacy = 0,
    Map = 1,
    Translate = 2,
    Auto = 3,
    UNRECOGNIZED = -1
}
export declare function keyboardModeFromJSON(object: any): KeyboardMode;
export declare function keyboardModeToJSON(object: KeyboardMode): string;
export declare enum ControlKey {
    Unknown = 0,
    Alt = 1,
    Backspace = 2,
    CapsLock = 3,
    Control = 4,
    Delete = 5,
    DownArrow = 6,
    End = 7,
    Escape = 8,
    F1 = 9,
    F10 = 10,
    F11 = 11,
    F12 = 12,
    F2 = 13,
    F3 = 14,
    F4 = 15,
    F5 = 16,
    F6 = 17,
    F7 = 18,
    F8 = 19,
    F9 = 20,
    Home = 21,
    LeftArrow = 22,
    /** Meta - / meta key (also known as "windows"; "super"; and "command") */
    Meta = 23,
    /** Option - / option key on macOS (alt key on Linux and Windows) */
    Option = 24,
    PageDown = 25,
    PageUp = 26,
    Return = 27,
    RightArrow = 28,
    Shift = 29,
    Space = 30,
    Tab = 31,
    UpArrow = 32,
    Numpad0 = 33,
    Numpad1 = 34,
    Numpad2 = 35,
    Numpad3 = 36,
    Numpad4 = 37,
    Numpad5 = 38,
    Numpad6 = 39,
    Numpad7 = 40,
    Numpad8 = 41,
    Numpad9 = 42,
    Cancel = 43,
    Clear = 44,
    /** Menu - deprecated, use Alt instead */
    Menu = 45,
    Pause = 46,
    Kana = 47,
    Hangul = 48,
    Junja = 49,
    Final = 50,
    Hanja = 51,
    Kanji = 52,
    Convert = 53,
    Select = 54,
    Print = 55,
    Execute = 56,
    Snapshot = 57,
    Insert = 58,
    Help = 59,
    Sleep = 60,
    Separator = 61,
    Scroll = 62,
    NumLock = 63,
    RWin = 64,
    Apps = 65,
    Multiply = 66,
    Add = 67,
    Subtract = 68,
    Decimal = 69,
    Divide = 70,
    Equals = 71,
    NumpadEnter = 72,
    RShift = 73,
    RControl = 74,
    RAlt = 75,
    /** VolumeMute - mainly used on mobile devices as controlled side */
    VolumeMute = 76,
    VolumeUp = 77,
    VolumeDown = 78,
    /** Power - mainly used on mobile devices as controlled side */
    Power = 79,
    CtrlAltDel = 100,
    LockScreen = 101,
    UNRECOGNIZED = -1
}
export declare function controlKeyFromJSON(object: any): ControlKey;
export declare function controlKeyToJSON(object: ControlKey): string;
export declare enum ClipboardFormat {
    Text = 0,
    Rtf = 1,
    Html = 2,
    ImageRgba = 21,
    ImagePng = 22,
    ImageSvg = 23,
    Special = 31,
    UNRECOGNIZED = -1
}
export declare function clipboardFormatFromJSON(object: any): ClipboardFormat;
export declare function clipboardFormatToJSON(object: ClipboardFormat): string;
export declare enum FileType {
    Dir = 0,
    DirLink = 2,
    DirDrive = 3,
    File = 4,
    FileLink = 5,
    UNRECOGNIZED = -1
}
export declare function fileTypeFromJSON(object: any): FileType;
export declare function fileTypeToJSON(object: FileType): string;
export declare enum ImageQuality {
    NotSet = 0,
    Low = 2,
    Balanced = 3,
    Best = 4,
    UNRECOGNIZED = -1
}
export declare function imageQualityFromJSON(object: any): ImageQuality;
export declare function imageQualityToJSON(object: ImageQuality): string;
export interface EncodedVideoFrame {
    data: Uint8Array;
    key: boolean;
    pts: number;
}
export interface EncodedVideoFrames {
    frames: EncodedVideoFrame[];
}
export interface RGB {
    compress: boolean;
}
/** planes data send directly in binary for better use arraybuffer on web */
export interface YUV {
    compress: boolean;
    stride: number;
}
export interface VideoFrame {
    vp9s?: EncodedVideoFrames | undefined;
    rgb?: RGB | undefined;
    yuv?: YUV | undefined;
    h264s?: EncodedVideoFrames | undefined;
    h265s?: EncodedVideoFrames | undefined;
    vp8s?: EncodedVideoFrames | undefined;
    av1s?: EncodedVideoFrames | undefined;
    display: number;
}
export interface IdPk {
    id: string;
    pk: Uint8Array;
}
export interface DisplayInfo {
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    online: boolean;
    cursor_embedded: boolean;
    original_resolution: Resolution | undefined;
    scale: number;
}
export interface PortForward {
    host: string;
    port: number;
}
export interface FileTransfer {
    dir: string;
    show_hidden: boolean;
}
export interface ViewCamera {
}
export interface OSLogin {
    username: string;
    password: string;
}
export interface LoginRequest {
    username: string;
    password: Uint8Array;
    my_id: string;
    my_name: string;
    option: OptionMessage | undefined;
    file_transfer?: FileTransfer | undefined;
    port_forward?: PortForward | undefined;
    view_camera?: ViewCamera | undefined;
    terminal?: Terminal | undefined;
    video_ack_required: boolean;
    session_id: number;
    version: string;
    os_login: OSLogin | undefined;
    my_platform: string;
    hwid: Uint8Array;
    avatar: string;
}
export interface Terminal {
    /** Service ID for reconnecting to existing session */
    service_id: string;
}
export interface Auth2FA {
    code: string;
    hwid: Uint8Array;
}
export interface ChatMessage {
    text: string;
}
export interface Features {
    privacy_mode: boolean;
    terminal: boolean;
}
export interface CodecAbility {
    vp8: boolean;
    vp9: boolean;
    av1: boolean;
    h264: boolean;
    h265: boolean;
}
export interface SupportedEncoding {
    h264: boolean;
    h265: boolean;
    vp8: boolean;
    av1: boolean;
    i444: CodecAbility | undefined;
}
export interface PeerInfo {
    username: string;
    hostname: string;
    platform: string;
    displays: DisplayInfo[];
    current_display: number;
    sas_enabled: boolean;
    version: string;
    features: Features | undefined;
    encoding: SupportedEncoding | undefined;
    resolutions: SupportedResolutions | undefined;
    /**
     * Use JSON's key-value format which is friendly for peer to handle.
     * NOTE: Only support one-level dictionaries (for peer to update), and the key is of type string.
     */
    platform_additions: string;
    windows_sessions: WindowsSessions | undefined;
}
export interface WindowsSession {
    sid: number;
    name: string;
}
export interface LoginResponse {
    error?: string | undefined;
    peer_info?: PeerInfo | undefined;
    enable_trusted_devices: boolean;
}
export interface TouchScaleUpdate {
    /**
     * The delta scale factor relative to the previous scale.
     * delta * 1000
     * 0 means scale end
     */
    scale: number;
}
export interface TouchPanStart {
    x: number;
    y: number;
}
export interface TouchPanUpdate {
    /** The delta x position relative to the previous position. */
    x: number;
    /** The delta y position relative to the previous position. */
    y: number;
}
export interface TouchPanEnd {
    x: number;
    y: number;
}
export interface TouchEvent {
    scale_update?: TouchScaleUpdate | undefined;
    pan_start?: TouchPanStart | undefined;
    pan_update?: TouchPanUpdate | undefined;
    pan_end?: TouchPanEnd | undefined;
}
export interface PointerDeviceEvent {
    touch_event?: TouchEvent | undefined;
    modifiers: ControlKey[];
}
export interface MouseEvent {
    mask: number;
    x: number;
    y: number;
    modifiers: ControlKey[];
}
export interface KeyEvent {
    /** `down` indicates the key's state(down or up). */
    down: boolean;
    /** `press` indicates a click event(down and up). */
    press: boolean;
    control_key?: ControlKey | undefined;
    /** position key code. win: scancode, linux: key code, macos: key code */
    chr?: number | undefined;
    unicode?: number | undefined;
    seq?: string | undefined;
    /**
     * high word. virtual keycode
     * low word. unicode
     */
    win2win_hotkey?: number | undefined;
    modifiers: ControlKey[];
    mode: KeyboardMode;
}
export interface CursorData {
    id: number;
    hotx: number;
    hoty: number;
    width: number;
    height: number;
    colors: Uint8Array;
}
export interface CursorPosition {
    x: number;
    y: number;
}
export interface Hash {
    salt: string;
    challenge: string;
}
export interface Clipboard {
    compress: boolean;
    content: Uint8Array;
    width: number;
    height: number;
    format: ClipboardFormat;
    /** Special format name, only used when format is Special. */
    special_name: string;
}
export interface MultiClipboards {
    clipboards: Clipboard[];
}
export interface FileEntry {
    entry_type: FileType;
    name: string;
    is_hidden: boolean;
    size: number;
    modified_time: number;
}
export interface FileDirectory {
    id: number;
    path: string;
    entries: FileEntry[];
}
export interface ReadDir {
    path: string;
    include_hidden: boolean;
}
export interface ReadEmptyDirs {
    path: string;
    include_hidden: boolean;
}
export interface ReadEmptyDirsResponse {
    path: string;
    empty_dirs: FileDirectory[];
}
export interface ReadAllFiles {
    id: number;
    path: string;
    include_hidden: boolean;
}
export interface FileRename {
    id: number;
    path: string;
    new_name: string;
}
export interface FileAction {
    read_dir?: ReadDir | undefined;
    send?: FileTransferSendRequest | undefined;
    receive?: FileTransferReceiveRequest | undefined;
    create?: FileDirCreate | undefined;
    remove_dir?: FileRemoveDir | undefined;
    remove_file?: FileRemoveFile | undefined;
    all_files?: ReadAllFiles | undefined;
    cancel?: FileTransferCancel | undefined;
    send_confirm?: FileTransferSendConfirmRequest | undefined;
    rename?: FileRename | undefined;
    read_empty_dirs?: ReadEmptyDirs | undefined;
}
export interface FileTransferCancel {
    id: number;
}
export interface FileResponse {
    dir?: FileDirectory | undefined;
    block?: FileTransferBlock | undefined;
    error?: FileTransferError | undefined;
    done?: FileTransferDone | undefined;
    digest?: FileTransferDigest | undefined;
    empty_dirs?: ReadEmptyDirsResponse | undefined;
}
export interface FileTransferDigest {
    id: number;
    file_num: number;
    last_modified: number;
    file_size: number;
    is_upload: boolean;
    is_identical: boolean;
    /** For resume. Indicates the size of the file already transferred */
    transferred_size: number;
    /** For resume. Indicates if the transfer is a resume. */
    is_resume: boolean;
}
export interface FileTransferBlock {
    id: number;
    file_num: number;
    data: Uint8Array;
    compressed: boolean;
    blk_id: number;
}
export interface FileTransferError {
    id: number;
    error: string;
    file_num: number;
}
export interface FileTransferSendRequest {
    id: number;
    path: string;
    include_hidden: boolean;
    file_num: number;
    file_type: FileTransferSendRequest_FileType;
}
export declare enum FileTransferSendRequest_FileType {
    Generic = 0,
    Printer = 1,
    UNRECOGNIZED = -1
}
export declare function fileTransferSendRequest_FileTypeFromJSON(object: any): FileTransferSendRequest_FileType;
export declare function fileTransferSendRequest_FileTypeToJSON(object: FileTransferSendRequest_FileType): string;
export interface FileTransferSendConfirmRequest {
    id: number;
    file_num: number;
    skip?: boolean | undefined;
    offset_blk?: number | undefined;
}
export interface FileTransferDone {
    id: number;
    file_num: number;
}
export interface FileTransferReceiveRequest {
    id: number;
    /** path written to */
    path: string;
    files: FileEntry[];
    file_num: number;
    total_size: number;
}
export interface FileRemoveDir {
    id: number;
    path: string;
    recursive: boolean;
}
export interface FileRemoveFile {
    id: number;
    path: string;
    file_num: number;
}
export interface FileDirCreate {
    id: number;
    path: string;
}
/** main logic from freeRDP */
export interface CliprdrMonitorReady {
}
export interface CliprdrFormat {
    id: number;
    format: string;
}
export interface CliprdrServerFormatList {
    formats: CliprdrFormat[];
}
export interface CliprdrServerFormatListResponse {
    msg_flags: number;
}
export interface CliprdrServerFormatDataRequest {
    requested_format_id: number;
}
export interface CliprdrServerFormatDataResponse {
    msg_flags: number;
    format_data: Uint8Array;
}
export interface CliprdrFileContentsRequest {
    stream_id: number;
    list_index: number;
    dw_flags: number;
    n_position_low: number;
    n_position_high: number;
    cb_requested: number;
    have_clip_data_id: boolean;
    clip_data_id: number;
}
export interface CliprdrFileContentsResponse {
    msg_flags: number;
    stream_id: number;
    requested_data: Uint8Array;
}
/**
 * Try empty clipboard in the following case(Windows only):
 * 1. `A`(Windows) -> `B`, `C`
 * 2. Copy in `A, file clipboards on `B` and `C` are updated.
 * 3. Copy in `B`.
 * `A` should tell `C` to empty the file clipboard.
 */
export interface CliprdrTryEmpty {
}
/** Clipobard file message for audit. */
export interface CliprdrFile {
    name: string;
    size: number;
}
export interface CliprdrFiles {
    files: CliprdrFile[];
}
export interface Cliprdr {
    ready?: CliprdrMonitorReady | undefined;
    format_list?: CliprdrServerFormatList | undefined;
    format_list_response?: CliprdrServerFormatListResponse | undefined;
    format_data_request?: CliprdrServerFormatDataRequest | undefined;
    format_data_response?: CliprdrServerFormatDataResponse | undefined;
    file_contents_request?: CliprdrFileContentsRequest | undefined;
    file_contents_response?: CliprdrFileContentsResponse | undefined;
    try_empty?: CliprdrTryEmpty | undefined;
    files?: CliprdrFiles | undefined;
}
export interface Resolution {
    width: number;
    height: number;
}
export interface DisplayResolution {
    display: number;
    resolution: Resolution | undefined;
}
export interface SupportedResolutions {
    resolutions: Resolution[];
}
export interface SwitchDisplay {
    display: number;
    x: number;
    y: number;
    width: number;
    height: number;
    cursor_embedded: boolean;
    resolutions: SupportedResolutions | undefined;
    /** Do not care about the origin point for now. */
    original_resolution: Resolution | undefined;
}
export interface CaptureDisplays {
    add: number[];
    sub: number[];
    set: number[];
}
export interface ToggleVirtualDisplay {
    display: number;
    on: boolean;
}
export interface TogglePrivacyMode {
    impl_key: string;
    on: boolean;
}
export interface PermissionInfo {
    permission: PermissionInfo_Permission;
    enabled: boolean;
}
export declare enum PermissionInfo_Permission {
    Keyboard = 0,
    Clipboard = 2,
    Audio = 3,
    File = 4,
    Restart = 5,
    Recording = 6,
    BlockInput = 7,
    UNRECOGNIZED = -1
}
export declare function permissionInfo_PermissionFromJSON(object: any): PermissionInfo_Permission;
export declare function permissionInfo_PermissionToJSON(object: PermissionInfo_Permission): string;
export interface SupportedDecoding {
    ability_vp9: number;
    ability_h264: number;
    ability_h265: number;
    prefer: SupportedDecoding_PreferCodec;
    ability_vp8: number;
    ability_av1: number;
    i444: CodecAbility | undefined;
    prefer_chroma: Chroma;
}
export declare enum SupportedDecoding_PreferCodec {
    Auto = 0,
    VP9 = 1,
    H264 = 2,
    H265 = 3,
    VP8 = 4,
    AV1 = 5,
    UNRECOGNIZED = -1
}
export declare function supportedDecoding_PreferCodecFromJSON(object: any): SupportedDecoding_PreferCodec;
export declare function supportedDecoding_PreferCodecToJSON(object: SupportedDecoding_PreferCodec): string;
export interface OptionMessage {
    image_quality: ImageQuality;
    lock_after_session_end: OptionMessage_BoolOption;
    show_remote_cursor: OptionMessage_BoolOption;
    privacy_mode: OptionMessage_BoolOption;
    block_input: OptionMessage_BoolOption;
    custom_image_quality: number;
    disable_audio: OptionMessage_BoolOption;
    disable_clipboard: OptionMessage_BoolOption;
    enable_file_transfer: OptionMessage_BoolOption;
    supported_decoding: SupportedDecoding | undefined;
    custom_fps: number;
    disable_keyboard: OptionMessage_BoolOption;
    /**
     * Position 13 is used for Resolution. Remove later.
     * Resolution custom_resolution = 13;
     * BoolOption support_windows_specific_session = 14;
     * starting from 15 please, do not use removed fields
     */
    follow_remote_cursor: OptionMessage_BoolOption;
    follow_remote_window: OptionMessage_BoolOption;
    disable_camera: OptionMessage_BoolOption;
    terminal_persistent: OptionMessage_BoolOption;
    show_my_cursor: OptionMessage_BoolOption;
}
export declare enum OptionMessage_BoolOption {
    NotSet = 0,
    No = 1,
    Yes = 2,
    UNRECOGNIZED = -1
}
export declare function optionMessage_BoolOptionFromJSON(object: any): OptionMessage_BoolOption;
export declare function optionMessage_BoolOptionToJSON(object: OptionMessage_BoolOption): string;
export interface TestDelay {
    time: number;
    from_client: boolean;
    last_delay: number;
    target_bitrate: number;
}
export interface PublicKey {
    asymmetric_value: Uint8Array;
    symmetric_value: Uint8Array;
}
export interface SignedId {
    id: Uint8Array;
}
export interface AudioFormat {
    sample_rate: number;
    channels: number;
}
export interface AudioFrame {
    data: Uint8Array;
}
/** Notify peer to show message box. */
export interface MessageBox {
    /** Message type. Refer to flutter/lib/common.dart/msgBox(). */
    msgtype: string;
    title: string;
    /** English */
    text: string;
    /**
     * If not empty, msgbox provides a button to following the link.
     * The link here can't be directly http url.
     * It must be the key of http url configed in peer side or "rustdesk://*" (jump in app).
     */
    link: string;
}
export interface BackNotification {
    privacy_mode_state?: BackNotification_PrivacyModeState | undefined;
    block_input_state?: BackNotification_BlockInputState | undefined;
    /** Supplementary message, for "PrvOnFailed" and "PrvOffFailed" */
    details: string;
    /** The key of the implementation */
    impl_key: string;
}
/** no need to consider block input by someone else */
export declare enum BackNotification_BlockInputState {
    BlkStateUnknown = 0,
    BlkOnSucceeded = 2,
    BlkOnFailed = 3,
    BlkOffSucceeded = 4,
    BlkOffFailed = 5,
    UNRECOGNIZED = -1
}
export declare function backNotification_BlockInputStateFromJSON(object: any): BackNotification_BlockInputState;
export declare function backNotification_BlockInputStateToJSON(object: BackNotification_BlockInputState): string;
export declare enum BackNotification_PrivacyModeState {
    PrvStateUnknown = 0,
    /** PrvOnByOther - Privacy mode on by someone else */
    PrvOnByOther = 2,
    /** PrvNotSupported - Privacy mode is not supported on the remote side */
    PrvNotSupported = 3,
    /** PrvOnSucceeded - Privacy mode on by self */
    PrvOnSucceeded = 4,
    /** PrvOnFailedDenied - Privacy mode on by self, but denied */
    PrvOnFailedDenied = 5,
    /** PrvOnFailedPlugin - Some plugins are not found */
    PrvOnFailedPlugin = 6,
    /** PrvOnFailed - Privacy mode on by self, but failed */
    PrvOnFailed = 7,
    /** PrvOffSucceeded - Privacy mode off by self */
    PrvOffSucceeded = 8,
    /** PrvOffByPeer - Ctrl + P */
    PrvOffByPeer = 9,
    /** PrvOffFailed - Privacy mode off by self, but failed */
    PrvOffFailed = 10,
    PrvOffUnknown = 11,
    UNRECOGNIZED = -1
}
export declare function backNotification_PrivacyModeStateFromJSON(object: any): BackNotification_PrivacyModeState;
export declare function backNotification_PrivacyModeStateToJSON(object: BackNotification_PrivacyModeState): string;
export interface ElevationRequestWithLogon {
    username: string;
    password: string;
}
export interface ElevationRequest {
    direct?: boolean | undefined;
    logon?: ElevationRequestWithLogon | undefined;
}
export interface SwitchSidesRequest {
    uuid: Uint8Array;
}
export interface SwitchSidesResponse {
    uuid: Uint8Array;
    lr: LoginRequest | undefined;
}
export interface SwitchBack {
}
export interface PluginRequest {
    id: string;
    content: Uint8Array;
}
export interface PluginFailure {
    id: string;
    name: string;
    msg: string;
}
export interface WindowsSessions {
    sessions: WindowsSession[];
    current_sid: number;
}
/** Query messages from peer. */
export interface MessageQuery {
    /**
     * The SwitchDisplay message of the target display.
     * If the target display is not found, the message will be ignored.
     */
    switch_display: number;
}
export interface Misc {
    chat_message?: ChatMessage | undefined;
    switch_display?: SwitchDisplay | undefined;
    permission_info?: PermissionInfo | undefined;
    option?: OptionMessage | undefined;
    audio_format?: AudioFormat | undefined;
    close_reason?: string | undefined;
    refresh_video?: boolean | undefined;
    video_received?: boolean | undefined;
    back_notification?: BackNotification | undefined;
    restart_remote_device?: boolean | undefined;
    uac?: boolean | undefined;
    foreground_window_elevated?: boolean | undefined;
    stop_service?: boolean | undefined;
    elevation_request?: ElevationRequest | undefined;
    elevation_response?: string | undefined;
    portable_service_running?: boolean | undefined;
    switch_sides_request?: SwitchSidesRequest | undefined;
    switch_back?: SwitchBack | undefined;
    /**
     * Deprecated since 1.2.4, use `change_display_resolution` (36) instead.
     * But we must keep it for compatibility when peer version < 1.2.4.
     */
    change_resolution?: Resolution | undefined;
    plugin_request?: PluginRequest | undefined;
    plugin_failure?: PluginFailure | undefined;
    /** deprecated */
    full_speed_fps?: number | undefined;
    auto_adjust_fps?: number | undefined;
    client_record_status?: boolean | undefined;
    capture_displays?: CaptureDisplays | undefined;
    refresh_video_display?: number | undefined;
    toggle_virtual_display?: ToggleVirtualDisplay | undefined;
    toggle_privacy_mode?: TogglePrivacyMode | undefined;
    supported_encoding?: SupportedEncoding | undefined;
    selected_sid?: number | undefined;
    change_display_resolution?: DisplayResolution | undefined;
    message_query?: MessageQuery | undefined;
    follow_current_display?: number | undefined;
}
export interface VoiceCallRequest {
    req_timestamp: number;
    /** Indicates whether the request is a connect action or a disconnect action. */
    is_connect: boolean;
}
export interface VoiceCallResponse {
    accepted: boolean;
    /** Should copy from [VoiceCallRequest::req_timestamp]. */
    req_timestamp: number;
    ack_timestamp: number;
}
export interface ScreenshotRequest {
    display: number;
    /**
     * sid is the session id on the controlling side
     * It is used to forward the message to the correct remote (session) window.
     */
    sid: string;
}
export interface ScreenshotResponse {
    sid: string;
    /** empty if success */
    msg: string;
    data: Uint8Array;
}
/** Terminal messages - standalone feature like FileAction */
export interface OpenTerminal {
    /** 0 for default terminal */
    terminal_id: number;
    rows: number;
    cols: number;
}
export interface ResizeTerminal {
    terminal_id: number;
    rows: number;
    cols: number;
}
export interface TerminalData {
    terminal_id: number;
    data: Uint8Array;
    compressed: boolean;
}
export interface CloseTerminal {
    terminal_id: number;
}
export interface TerminalAction {
    open?: OpenTerminal | undefined;
    data?: TerminalData | undefined;
    resize?: ResizeTerminal | undefined;
    close?: CloseTerminal | undefined;
}
export interface TerminalOpened {
    terminal_id: number;
    success: boolean;
    message: string;
    pid: number;
    /** Service ID for persistent sessions */
    service_id: string;
    /** Used to restore the persistent sessions. */
    persistent_sessions: number[];
}
export interface TerminalClosed {
    terminal_id: number;
    exit_code: number;
}
export interface TerminalError {
    terminal_id: number;
    message: string;
}
export interface TerminalResponse {
    opened?: TerminalOpened | undefined;
    data?: TerminalData | undefined;
    closed?: TerminalClosed | undefined;
    error?: TerminalError | undefined;
}
export interface Message {
    signed_id?: SignedId | undefined;
    public_key?: PublicKey | undefined;
    test_delay?: TestDelay | undefined;
    video_frame?: VideoFrame | undefined;
    login_request?: LoginRequest | undefined;
    login_response?: LoginResponse | undefined;
    hash?: Hash | undefined;
    mouse_event?: MouseEvent | undefined;
    audio_frame?: AudioFrame | undefined;
    cursor_data?: CursorData | undefined;
    cursor_position?: CursorPosition | undefined;
    cursor_id?: number | undefined;
    key_event?: KeyEvent | undefined;
    clipboard?: Clipboard | undefined;
    file_action?: FileAction | undefined;
    file_response?: FileResponse | undefined;
    misc?: Misc | undefined;
    cliprdr?: Cliprdr | undefined;
    message_box?: MessageBox | undefined;
    switch_sides_response?: SwitchSidesResponse | undefined;
    voice_call_request?: VoiceCallRequest | undefined;
    voice_call_response?: VoiceCallResponse | undefined;
    peer_info?: PeerInfo | undefined;
    pointer_device_event?: PointerDeviceEvent | undefined;
    auth_2fa?: Auth2FA | undefined;
    multi_clipboards?: MultiClipboards | undefined;
    screenshot_request?: ScreenshotRequest | undefined;
    screenshot_response?: ScreenshotResponse | undefined;
    terminal_action?: TerminalAction | undefined;
    terminal_response?: TerminalResponse | undefined;
}
export declare const EncodedVideoFrame: {
    encode(message: EncodedVideoFrame, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EncodedVideoFrame;
    fromJSON(object: any): EncodedVideoFrame;
    toJSON(message: EncodedVideoFrame): unknown;
    create<I extends Exact<DeepPartial<EncodedVideoFrame>, I>>(base?: I): EncodedVideoFrame;
    fromPartial<I extends Exact<DeepPartial<EncodedVideoFrame>, I>>(object: I): EncodedVideoFrame;
};
export declare const EncodedVideoFrames: {
    encode(message: EncodedVideoFrames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EncodedVideoFrames;
    fromJSON(object: any): EncodedVideoFrames;
    toJSON(message: EncodedVideoFrames): unknown;
    create<I extends Exact<DeepPartial<EncodedVideoFrames>, I>>(base?: I): EncodedVideoFrames;
    fromPartial<I extends Exact<DeepPartial<EncodedVideoFrames>, I>>(object: I): EncodedVideoFrames;
};
export declare const RGB: {
    encode(message: RGB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RGB;
    fromJSON(object: any): RGB;
    toJSON(message: RGB): unknown;
    create<I extends Exact<DeepPartial<RGB>, I>>(base?: I): RGB;
    fromPartial<I extends Exact<DeepPartial<RGB>, I>>(object: I): RGB;
};
export declare const YUV: {
    encode(message: YUV, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): YUV;
    fromJSON(object: any): YUV;
    toJSON(message: YUV): unknown;
    create<I extends Exact<DeepPartial<YUV>, I>>(base?: I): YUV;
    fromPartial<I extends Exact<DeepPartial<YUV>, I>>(object: I): YUV;
};
export declare const VideoFrame: {
    encode(message: VideoFrame, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoFrame;
    fromJSON(object: any): VideoFrame;
    toJSON(message: VideoFrame): unknown;
    create<I extends Exact<DeepPartial<VideoFrame>, I>>(base?: I): VideoFrame;
    fromPartial<I extends Exact<DeepPartial<VideoFrame>, I>>(object: I): VideoFrame;
};
export declare const IdPk: {
    encode(message: IdPk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdPk;
    fromJSON(object: any): IdPk;
    toJSON(message: IdPk): unknown;
    create<I extends Exact<DeepPartial<IdPk>, I>>(base?: I): IdPk;
    fromPartial<I extends Exact<DeepPartial<IdPk>, I>>(object: I): IdPk;
};
export declare const DisplayInfo: {
    encode(message: DisplayInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisplayInfo;
    fromJSON(object: any): DisplayInfo;
    toJSON(message: DisplayInfo): unknown;
    create<I extends Exact<DeepPartial<DisplayInfo>, I>>(base?: I): DisplayInfo;
    fromPartial<I extends Exact<DeepPartial<DisplayInfo>, I>>(object: I): DisplayInfo;
};
export declare const PortForward: {
    encode(message: PortForward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PortForward;
    fromJSON(object: any): PortForward;
    toJSON(message: PortForward): unknown;
    create<I extends Exact<DeepPartial<PortForward>, I>>(base?: I): PortForward;
    fromPartial<I extends Exact<DeepPartial<PortForward>, I>>(object: I): PortForward;
};
export declare const FileTransfer: {
    encode(message: FileTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransfer;
    fromJSON(object: any): FileTransfer;
    toJSON(message: FileTransfer): unknown;
    create<I extends Exact<DeepPartial<FileTransfer>, I>>(base?: I): FileTransfer;
    fromPartial<I extends Exact<DeepPartial<FileTransfer>, I>>(object: I): FileTransfer;
};
export declare const ViewCamera: {
    encode(_: ViewCamera, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ViewCamera;
    fromJSON(_: any): ViewCamera;
    toJSON(_: ViewCamera): unknown;
    create<I extends Exact<DeepPartial<ViewCamera>, I>>(base?: I): ViewCamera;
    fromPartial<I extends Exact<DeepPartial<ViewCamera>, I>>(_: I): ViewCamera;
};
export declare const OSLogin: {
    encode(message: OSLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OSLogin;
    fromJSON(object: any): OSLogin;
    toJSON(message: OSLogin): unknown;
    create<I extends Exact<DeepPartial<OSLogin>, I>>(base?: I): OSLogin;
    fromPartial<I extends Exact<DeepPartial<OSLogin>, I>>(object: I): OSLogin;
};
export declare const LoginRequest: {
    encode(message: LoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest;
    fromJSON(object: any): LoginRequest;
    toJSON(message: LoginRequest): unknown;
    create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest;
    fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest;
};
export declare const Terminal: {
    encode(message: Terminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Terminal;
    fromJSON(object: any): Terminal;
    toJSON(message: Terminal): unknown;
    create<I extends Exact<DeepPartial<Terminal>, I>>(base?: I): Terminal;
    fromPartial<I extends Exact<DeepPartial<Terminal>, I>>(object: I): Terminal;
};
export declare const Auth2FA: {
    encode(message: Auth2FA, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Auth2FA;
    fromJSON(object: any): Auth2FA;
    toJSON(message: Auth2FA): unknown;
    create<I extends Exact<DeepPartial<Auth2FA>, I>>(base?: I): Auth2FA;
    fromPartial<I extends Exact<DeepPartial<Auth2FA>, I>>(object: I): Auth2FA;
};
export declare const ChatMessage: {
    encode(message: ChatMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessage;
    fromJSON(object: any): ChatMessage;
    toJSON(message: ChatMessage): unknown;
    create<I extends Exact<DeepPartial<ChatMessage>, I>>(base?: I): ChatMessage;
    fromPartial<I extends Exact<DeepPartial<ChatMessage>, I>>(object: I): ChatMessage;
};
export declare const Features: {
    encode(message: Features, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Features;
    fromJSON(object: any): Features;
    toJSON(message: Features): unknown;
    create<I extends Exact<DeepPartial<Features>, I>>(base?: I): Features;
    fromPartial<I extends Exact<DeepPartial<Features>, I>>(object: I): Features;
};
export declare const CodecAbility: {
    encode(message: CodecAbility, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodecAbility;
    fromJSON(object: any): CodecAbility;
    toJSON(message: CodecAbility): unknown;
    create<I extends Exact<DeepPartial<CodecAbility>, I>>(base?: I): CodecAbility;
    fromPartial<I extends Exact<DeepPartial<CodecAbility>, I>>(object: I): CodecAbility;
};
export declare const SupportedEncoding: {
    encode(message: SupportedEncoding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SupportedEncoding;
    fromJSON(object: any): SupportedEncoding;
    toJSON(message: SupportedEncoding): unknown;
    create<I extends Exact<DeepPartial<SupportedEncoding>, I>>(base?: I): SupportedEncoding;
    fromPartial<I extends Exact<DeepPartial<SupportedEncoding>, I>>(object: I): SupportedEncoding;
};
export declare const PeerInfo: {
    encode(message: PeerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo;
    fromJSON(object: any): PeerInfo;
    toJSON(message: PeerInfo): unknown;
    create<I extends Exact<DeepPartial<PeerInfo>, I>>(base?: I): PeerInfo;
    fromPartial<I extends Exact<DeepPartial<PeerInfo>, I>>(object: I): PeerInfo;
};
export declare const WindowsSession: {
    encode(message: WindowsSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WindowsSession;
    fromJSON(object: any): WindowsSession;
    toJSON(message: WindowsSession): unknown;
    create<I extends Exact<DeepPartial<WindowsSession>, I>>(base?: I): WindowsSession;
    fromPartial<I extends Exact<DeepPartial<WindowsSession>, I>>(object: I): WindowsSession;
};
export declare const LoginResponse: {
    encode(message: LoginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse;
    fromJSON(object: any): LoginResponse;
    toJSON(message: LoginResponse): unknown;
    create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse;
    fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse;
};
export declare const TouchScaleUpdate: {
    encode(message: TouchScaleUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TouchScaleUpdate;
    fromJSON(object: any): TouchScaleUpdate;
    toJSON(message: TouchScaleUpdate): unknown;
    create<I extends Exact<DeepPartial<TouchScaleUpdate>, I>>(base?: I): TouchScaleUpdate;
    fromPartial<I extends Exact<DeepPartial<TouchScaleUpdate>, I>>(object: I): TouchScaleUpdate;
};
export declare const TouchPanStart: {
    encode(message: TouchPanStart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TouchPanStart;
    fromJSON(object: any): TouchPanStart;
    toJSON(message: TouchPanStart): unknown;
    create<I extends Exact<DeepPartial<TouchPanStart>, I>>(base?: I): TouchPanStart;
    fromPartial<I extends Exact<DeepPartial<TouchPanStart>, I>>(object: I): TouchPanStart;
};
export declare const TouchPanUpdate: {
    encode(message: TouchPanUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TouchPanUpdate;
    fromJSON(object: any): TouchPanUpdate;
    toJSON(message: TouchPanUpdate): unknown;
    create<I extends Exact<DeepPartial<TouchPanUpdate>, I>>(base?: I): TouchPanUpdate;
    fromPartial<I extends Exact<DeepPartial<TouchPanUpdate>, I>>(object: I): TouchPanUpdate;
};
export declare const TouchPanEnd: {
    encode(message: TouchPanEnd, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TouchPanEnd;
    fromJSON(object: any): TouchPanEnd;
    toJSON(message: TouchPanEnd): unknown;
    create<I extends Exact<DeepPartial<TouchPanEnd>, I>>(base?: I): TouchPanEnd;
    fromPartial<I extends Exact<DeepPartial<TouchPanEnd>, I>>(object: I): TouchPanEnd;
};
export declare const TouchEvent: {
    encode(message: TouchEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TouchEvent;
    fromJSON(object: any): TouchEvent;
    toJSON(message: TouchEvent): unknown;
    create<I extends Exact<DeepPartial<TouchEvent>, I>>(base?: I): TouchEvent;
    fromPartial<I extends Exact<DeepPartial<TouchEvent>, I>>(object: I): TouchEvent;
};
export declare const PointerDeviceEvent: {
    encode(message: PointerDeviceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PointerDeviceEvent;
    fromJSON(object: any): PointerDeviceEvent;
    toJSON(message: PointerDeviceEvent): unknown;
    create<I extends Exact<DeepPartial<PointerDeviceEvent>, I>>(base?: I): PointerDeviceEvent;
    fromPartial<I extends Exact<DeepPartial<PointerDeviceEvent>, I>>(object: I): PointerDeviceEvent;
};
export declare const MouseEvent: {
    encode(message: MouseEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MouseEvent;
    fromJSON(object: any): MouseEvent;
    toJSON(message: MouseEvent): unknown;
    create<I extends Exact<DeepPartial<MouseEvent>, I>>(base?: I): MouseEvent;
    fromPartial<I extends Exact<DeepPartial<MouseEvent>, I>>(object: I): MouseEvent;
};
export declare const KeyEvent: {
    encode(message: KeyEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyEvent;
    fromJSON(object: any): KeyEvent;
    toJSON(message: KeyEvent): unknown;
    create<I extends Exact<DeepPartial<KeyEvent>, I>>(base?: I): KeyEvent;
    fromPartial<I extends Exact<DeepPartial<KeyEvent>, I>>(object: I): KeyEvent;
};
export declare const CursorData: {
    encode(message: CursorData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CursorData;
    fromJSON(object: any): CursorData;
    toJSON(message: CursorData): unknown;
    create<I extends Exact<DeepPartial<CursorData>, I>>(base?: I): CursorData;
    fromPartial<I extends Exact<DeepPartial<CursorData>, I>>(object: I): CursorData;
};
export declare const CursorPosition: {
    encode(message: CursorPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CursorPosition;
    fromJSON(object: any): CursorPosition;
    toJSON(message: CursorPosition): unknown;
    create<I extends Exact<DeepPartial<CursorPosition>, I>>(base?: I): CursorPosition;
    fromPartial<I extends Exact<DeepPartial<CursorPosition>, I>>(object: I): CursorPosition;
};
export declare const Hash: {
    encode(message: Hash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Hash;
    fromJSON(object: any): Hash;
    toJSON(message: Hash): unknown;
    create<I extends Exact<DeepPartial<Hash>, I>>(base?: I): Hash;
    fromPartial<I extends Exact<DeepPartial<Hash>, I>>(object: I): Hash;
};
export declare const Clipboard: {
    encode(message: Clipboard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Clipboard;
    fromJSON(object: any): Clipboard;
    toJSON(message: Clipboard): unknown;
    create<I extends Exact<DeepPartial<Clipboard>, I>>(base?: I): Clipboard;
    fromPartial<I extends Exact<DeepPartial<Clipboard>, I>>(object: I): Clipboard;
};
export declare const MultiClipboards: {
    encode(message: MultiClipboards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiClipboards;
    fromJSON(object: any): MultiClipboards;
    toJSON(message: MultiClipboards): unknown;
    create<I extends Exact<DeepPartial<MultiClipboards>, I>>(base?: I): MultiClipboards;
    fromPartial<I extends Exact<DeepPartial<MultiClipboards>, I>>(object: I): MultiClipboards;
};
export declare const FileEntry: {
    encode(message: FileEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileEntry;
    fromJSON(object: any): FileEntry;
    toJSON(message: FileEntry): unknown;
    create<I extends Exact<DeepPartial<FileEntry>, I>>(base?: I): FileEntry;
    fromPartial<I extends Exact<DeepPartial<FileEntry>, I>>(object: I): FileEntry;
};
export declare const FileDirectory: {
    encode(message: FileDirectory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDirectory;
    fromJSON(object: any): FileDirectory;
    toJSON(message: FileDirectory): unknown;
    create<I extends Exact<DeepPartial<FileDirectory>, I>>(base?: I): FileDirectory;
    fromPartial<I extends Exact<DeepPartial<FileDirectory>, I>>(object: I): FileDirectory;
};
export declare const ReadDir: {
    encode(message: ReadDir, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReadDir;
    fromJSON(object: any): ReadDir;
    toJSON(message: ReadDir): unknown;
    create<I extends Exact<DeepPartial<ReadDir>, I>>(base?: I): ReadDir;
    fromPartial<I extends Exact<DeepPartial<ReadDir>, I>>(object: I): ReadDir;
};
export declare const ReadEmptyDirs: {
    encode(message: ReadEmptyDirs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReadEmptyDirs;
    fromJSON(object: any): ReadEmptyDirs;
    toJSON(message: ReadEmptyDirs): unknown;
    create<I extends Exact<DeepPartial<ReadEmptyDirs>, I>>(base?: I): ReadEmptyDirs;
    fromPartial<I extends Exact<DeepPartial<ReadEmptyDirs>, I>>(object: I): ReadEmptyDirs;
};
export declare const ReadEmptyDirsResponse: {
    encode(message: ReadEmptyDirsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReadEmptyDirsResponse;
    fromJSON(object: any): ReadEmptyDirsResponse;
    toJSON(message: ReadEmptyDirsResponse): unknown;
    create<I extends Exact<DeepPartial<ReadEmptyDirsResponse>, I>>(base?: I): ReadEmptyDirsResponse;
    fromPartial<I extends Exact<DeepPartial<ReadEmptyDirsResponse>, I>>(object: I): ReadEmptyDirsResponse;
};
export declare const ReadAllFiles: {
    encode(message: ReadAllFiles, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReadAllFiles;
    fromJSON(object: any): ReadAllFiles;
    toJSON(message: ReadAllFiles): unknown;
    create<I extends Exact<DeepPartial<ReadAllFiles>, I>>(base?: I): ReadAllFiles;
    fromPartial<I extends Exact<DeepPartial<ReadAllFiles>, I>>(object: I): ReadAllFiles;
};
export declare const FileRename: {
    encode(message: FileRename, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileRename;
    fromJSON(object: any): FileRename;
    toJSON(message: FileRename): unknown;
    create<I extends Exact<DeepPartial<FileRename>, I>>(base?: I): FileRename;
    fromPartial<I extends Exact<DeepPartial<FileRename>, I>>(object: I): FileRename;
};
export declare const FileAction: {
    encode(message: FileAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileAction;
    fromJSON(object: any): FileAction;
    toJSON(message: FileAction): unknown;
    create<I extends Exact<DeepPartial<FileAction>, I>>(base?: I): FileAction;
    fromPartial<I extends Exact<DeepPartial<FileAction>, I>>(object: I): FileAction;
};
export declare const FileTransferCancel: {
    encode(message: FileTransferCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferCancel;
    fromJSON(object: any): FileTransferCancel;
    toJSON(message: FileTransferCancel): unknown;
    create<I extends Exact<DeepPartial<FileTransferCancel>, I>>(base?: I): FileTransferCancel;
    fromPartial<I extends Exact<DeepPartial<FileTransferCancel>, I>>(object: I): FileTransferCancel;
};
export declare const FileResponse: {
    encode(message: FileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileResponse;
    fromJSON(object: any): FileResponse;
    toJSON(message: FileResponse): unknown;
    create<I extends Exact<DeepPartial<FileResponse>, I>>(base?: I): FileResponse;
    fromPartial<I extends Exact<DeepPartial<FileResponse>, I>>(object: I): FileResponse;
};
export declare const FileTransferDigest: {
    encode(message: FileTransferDigest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferDigest;
    fromJSON(object: any): FileTransferDigest;
    toJSON(message: FileTransferDigest): unknown;
    create<I extends Exact<DeepPartial<FileTransferDigest>, I>>(base?: I): FileTransferDigest;
    fromPartial<I extends Exact<DeepPartial<FileTransferDigest>, I>>(object: I): FileTransferDigest;
};
export declare const FileTransferBlock: {
    encode(message: FileTransferBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferBlock;
    fromJSON(object: any): FileTransferBlock;
    toJSON(message: FileTransferBlock): unknown;
    create<I extends Exact<DeepPartial<FileTransferBlock>, I>>(base?: I): FileTransferBlock;
    fromPartial<I extends Exact<DeepPartial<FileTransferBlock>, I>>(object: I): FileTransferBlock;
};
export declare const FileTransferError: {
    encode(message: FileTransferError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferError;
    fromJSON(object: any): FileTransferError;
    toJSON(message: FileTransferError): unknown;
    create<I extends Exact<DeepPartial<FileTransferError>, I>>(base?: I): FileTransferError;
    fromPartial<I extends Exact<DeepPartial<FileTransferError>, I>>(object: I): FileTransferError;
};
export declare const FileTransferSendRequest: {
    encode(message: FileTransferSendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferSendRequest;
    fromJSON(object: any): FileTransferSendRequest;
    toJSON(message: FileTransferSendRequest): unknown;
    create<I extends Exact<DeepPartial<FileTransferSendRequest>, I>>(base?: I): FileTransferSendRequest;
    fromPartial<I extends Exact<DeepPartial<FileTransferSendRequest>, I>>(object: I): FileTransferSendRequest;
};
export declare const FileTransferSendConfirmRequest: {
    encode(message: FileTransferSendConfirmRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferSendConfirmRequest;
    fromJSON(object: any): FileTransferSendConfirmRequest;
    toJSON(message: FileTransferSendConfirmRequest): unknown;
    create<I extends Exact<DeepPartial<FileTransferSendConfirmRequest>, I>>(base?: I): FileTransferSendConfirmRequest;
    fromPartial<I extends Exact<DeepPartial<FileTransferSendConfirmRequest>, I>>(object: I): FileTransferSendConfirmRequest;
};
export declare const FileTransferDone: {
    encode(message: FileTransferDone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferDone;
    fromJSON(object: any): FileTransferDone;
    toJSON(message: FileTransferDone): unknown;
    create<I extends Exact<DeepPartial<FileTransferDone>, I>>(base?: I): FileTransferDone;
    fromPartial<I extends Exact<DeepPartial<FileTransferDone>, I>>(object: I): FileTransferDone;
};
export declare const FileTransferReceiveRequest: {
    encode(message: FileTransferReceiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferReceiveRequest;
    fromJSON(object: any): FileTransferReceiveRequest;
    toJSON(message: FileTransferReceiveRequest): unknown;
    create<I extends Exact<DeepPartial<FileTransferReceiveRequest>, I>>(base?: I): FileTransferReceiveRequest;
    fromPartial<I extends Exact<DeepPartial<FileTransferReceiveRequest>, I>>(object: I): FileTransferReceiveRequest;
};
export declare const FileRemoveDir: {
    encode(message: FileRemoveDir, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileRemoveDir;
    fromJSON(object: any): FileRemoveDir;
    toJSON(message: FileRemoveDir): unknown;
    create<I extends Exact<DeepPartial<FileRemoveDir>, I>>(base?: I): FileRemoveDir;
    fromPartial<I extends Exact<DeepPartial<FileRemoveDir>, I>>(object: I): FileRemoveDir;
};
export declare const FileRemoveFile: {
    encode(message: FileRemoveFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileRemoveFile;
    fromJSON(object: any): FileRemoveFile;
    toJSON(message: FileRemoveFile): unknown;
    create<I extends Exact<DeepPartial<FileRemoveFile>, I>>(base?: I): FileRemoveFile;
    fromPartial<I extends Exact<DeepPartial<FileRemoveFile>, I>>(object: I): FileRemoveFile;
};
export declare const FileDirCreate: {
    encode(message: FileDirCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDirCreate;
    fromJSON(object: any): FileDirCreate;
    toJSON(message: FileDirCreate): unknown;
    create<I extends Exact<DeepPartial<FileDirCreate>, I>>(base?: I): FileDirCreate;
    fromPartial<I extends Exact<DeepPartial<FileDirCreate>, I>>(object: I): FileDirCreate;
};
export declare const CliprdrMonitorReady: {
    encode(_: CliprdrMonitorReady, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrMonitorReady;
    fromJSON(_: any): CliprdrMonitorReady;
    toJSON(_: CliprdrMonitorReady): unknown;
    create<I extends Exact<DeepPartial<CliprdrMonitorReady>, I>>(base?: I): CliprdrMonitorReady;
    fromPartial<I extends Exact<DeepPartial<CliprdrMonitorReady>, I>>(_: I): CliprdrMonitorReady;
};
export declare const CliprdrFormat: {
    encode(message: CliprdrFormat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrFormat;
    fromJSON(object: any): CliprdrFormat;
    toJSON(message: CliprdrFormat): unknown;
    create<I extends Exact<DeepPartial<CliprdrFormat>, I>>(base?: I): CliprdrFormat;
    fromPartial<I extends Exact<DeepPartial<CliprdrFormat>, I>>(object: I): CliprdrFormat;
};
export declare const CliprdrServerFormatList: {
    encode(message: CliprdrServerFormatList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrServerFormatList;
    fromJSON(object: any): CliprdrServerFormatList;
    toJSON(message: CliprdrServerFormatList): unknown;
    create<I extends Exact<DeepPartial<CliprdrServerFormatList>, I>>(base?: I): CliprdrServerFormatList;
    fromPartial<I extends Exact<DeepPartial<CliprdrServerFormatList>, I>>(object: I): CliprdrServerFormatList;
};
export declare const CliprdrServerFormatListResponse: {
    encode(message: CliprdrServerFormatListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrServerFormatListResponse;
    fromJSON(object: any): CliprdrServerFormatListResponse;
    toJSON(message: CliprdrServerFormatListResponse): unknown;
    create<I extends Exact<DeepPartial<CliprdrServerFormatListResponse>, I>>(base?: I): CliprdrServerFormatListResponse;
    fromPartial<I extends Exact<DeepPartial<CliprdrServerFormatListResponse>, I>>(object: I): CliprdrServerFormatListResponse;
};
export declare const CliprdrServerFormatDataRequest: {
    encode(message: CliprdrServerFormatDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrServerFormatDataRequest;
    fromJSON(object: any): CliprdrServerFormatDataRequest;
    toJSON(message: CliprdrServerFormatDataRequest): unknown;
    create<I extends Exact<DeepPartial<CliprdrServerFormatDataRequest>, I>>(base?: I): CliprdrServerFormatDataRequest;
    fromPartial<I extends Exact<DeepPartial<CliprdrServerFormatDataRequest>, I>>(object: I): CliprdrServerFormatDataRequest;
};
export declare const CliprdrServerFormatDataResponse: {
    encode(message: CliprdrServerFormatDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrServerFormatDataResponse;
    fromJSON(object: any): CliprdrServerFormatDataResponse;
    toJSON(message: CliprdrServerFormatDataResponse): unknown;
    create<I extends Exact<DeepPartial<CliprdrServerFormatDataResponse>, I>>(base?: I): CliprdrServerFormatDataResponse;
    fromPartial<I extends Exact<DeepPartial<CliprdrServerFormatDataResponse>, I>>(object: I): CliprdrServerFormatDataResponse;
};
export declare const CliprdrFileContentsRequest: {
    encode(message: CliprdrFileContentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrFileContentsRequest;
    fromJSON(object: any): CliprdrFileContentsRequest;
    toJSON(message: CliprdrFileContentsRequest): unknown;
    create<I extends Exact<DeepPartial<CliprdrFileContentsRequest>, I>>(base?: I): CliprdrFileContentsRequest;
    fromPartial<I extends Exact<DeepPartial<CliprdrFileContentsRequest>, I>>(object: I): CliprdrFileContentsRequest;
};
export declare const CliprdrFileContentsResponse: {
    encode(message: CliprdrFileContentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrFileContentsResponse;
    fromJSON(object: any): CliprdrFileContentsResponse;
    toJSON(message: CliprdrFileContentsResponse): unknown;
    create<I extends Exact<DeepPartial<CliprdrFileContentsResponse>, I>>(base?: I): CliprdrFileContentsResponse;
    fromPartial<I extends Exact<DeepPartial<CliprdrFileContentsResponse>, I>>(object: I): CliprdrFileContentsResponse;
};
export declare const CliprdrTryEmpty: {
    encode(_: CliprdrTryEmpty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrTryEmpty;
    fromJSON(_: any): CliprdrTryEmpty;
    toJSON(_: CliprdrTryEmpty): unknown;
    create<I extends Exact<DeepPartial<CliprdrTryEmpty>, I>>(base?: I): CliprdrTryEmpty;
    fromPartial<I extends Exact<DeepPartial<CliprdrTryEmpty>, I>>(_: I): CliprdrTryEmpty;
};
export declare const CliprdrFile: {
    encode(message: CliprdrFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrFile;
    fromJSON(object: any): CliprdrFile;
    toJSON(message: CliprdrFile): unknown;
    create<I extends Exact<DeepPartial<CliprdrFile>, I>>(base?: I): CliprdrFile;
    fromPartial<I extends Exact<DeepPartial<CliprdrFile>, I>>(object: I): CliprdrFile;
};
export declare const CliprdrFiles: {
    encode(message: CliprdrFiles, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CliprdrFiles;
    fromJSON(object: any): CliprdrFiles;
    toJSON(message: CliprdrFiles): unknown;
    create<I extends Exact<DeepPartial<CliprdrFiles>, I>>(base?: I): CliprdrFiles;
    fromPartial<I extends Exact<DeepPartial<CliprdrFiles>, I>>(object: I): CliprdrFiles;
};
export declare const Cliprdr: {
    encode(message: Cliprdr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cliprdr;
    fromJSON(object: any): Cliprdr;
    toJSON(message: Cliprdr): unknown;
    create<I extends Exact<DeepPartial<Cliprdr>, I>>(base?: I): Cliprdr;
    fromPartial<I extends Exact<DeepPartial<Cliprdr>, I>>(object: I): Cliprdr;
};
export declare const Resolution: {
    encode(message: Resolution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resolution;
    fromJSON(object: any): Resolution;
    toJSON(message: Resolution): unknown;
    create<I extends Exact<DeepPartial<Resolution>, I>>(base?: I): Resolution;
    fromPartial<I extends Exact<DeepPartial<Resolution>, I>>(object: I): Resolution;
};
export declare const DisplayResolution: {
    encode(message: DisplayResolution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisplayResolution;
    fromJSON(object: any): DisplayResolution;
    toJSON(message: DisplayResolution): unknown;
    create<I extends Exact<DeepPartial<DisplayResolution>, I>>(base?: I): DisplayResolution;
    fromPartial<I extends Exact<DeepPartial<DisplayResolution>, I>>(object: I): DisplayResolution;
};
export declare const SupportedResolutions: {
    encode(message: SupportedResolutions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SupportedResolutions;
    fromJSON(object: any): SupportedResolutions;
    toJSON(message: SupportedResolutions): unknown;
    create<I extends Exact<DeepPartial<SupportedResolutions>, I>>(base?: I): SupportedResolutions;
    fromPartial<I extends Exact<DeepPartial<SupportedResolutions>, I>>(object: I): SupportedResolutions;
};
export declare const SwitchDisplay: {
    encode(message: SwitchDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwitchDisplay;
    fromJSON(object: any): SwitchDisplay;
    toJSON(message: SwitchDisplay): unknown;
    create<I extends Exact<DeepPartial<SwitchDisplay>, I>>(base?: I): SwitchDisplay;
    fromPartial<I extends Exact<DeepPartial<SwitchDisplay>, I>>(object: I): SwitchDisplay;
};
export declare const CaptureDisplays: {
    encode(message: CaptureDisplays, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CaptureDisplays;
    fromJSON(object: any): CaptureDisplays;
    toJSON(message: CaptureDisplays): unknown;
    create<I extends Exact<DeepPartial<CaptureDisplays>, I>>(base?: I): CaptureDisplays;
    fromPartial<I extends Exact<DeepPartial<CaptureDisplays>, I>>(object: I): CaptureDisplays;
};
export declare const ToggleVirtualDisplay: {
    encode(message: ToggleVirtualDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToggleVirtualDisplay;
    fromJSON(object: any): ToggleVirtualDisplay;
    toJSON(message: ToggleVirtualDisplay): unknown;
    create<I extends Exact<DeepPartial<ToggleVirtualDisplay>, I>>(base?: I): ToggleVirtualDisplay;
    fromPartial<I extends Exact<DeepPartial<ToggleVirtualDisplay>, I>>(object: I): ToggleVirtualDisplay;
};
export declare const TogglePrivacyMode: {
    encode(message: TogglePrivacyMode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TogglePrivacyMode;
    fromJSON(object: any): TogglePrivacyMode;
    toJSON(message: TogglePrivacyMode): unknown;
    create<I extends Exact<DeepPartial<TogglePrivacyMode>, I>>(base?: I): TogglePrivacyMode;
    fromPartial<I extends Exact<DeepPartial<TogglePrivacyMode>, I>>(object: I): TogglePrivacyMode;
};
export declare const PermissionInfo: {
    encode(message: PermissionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionInfo;
    fromJSON(object: any): PermissionInfo;
    toJSON(message: PermissionInfo): unknown;
    create<I extends Exact<DeepPartial<PermissionInfo>, I>>(base?: I): PermissionInfo;
    fromPartial<I extends Exact<DeepPartial<PermissionInfo>, I>>(object: I): PermissionInfo;
};
export declare const SupportedDecoding: {
    encode(message: SupportedDecoding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SupportedDecoding;
    fromJSON(object: any): SupportedDecoding;
    toJSON(message: SupportedDecoding): unknown;
    create<I extends Exact<DeepPartial<SupportedDecoding>, I>>(base?: I): SupportedDecoding;
    fromPartial<I extends Exact<DeepPartial<SupportedDecoding>, I>>(object: I): SupportedDecoding;
};
export declare const OptionMessage: {
    encode(message: OptionMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OptionMessage;
    fromJSON(object: any): OptionMessage;
    toJSON(message: OptionMessage): unknown;
    create<I extends Exact<DeepPartial<OptionMessage>, I>>(base?: I): OptionMessage;
    fromPartial<I extends Exact<DeepPartial<OptionMessage>, I>>(object: I): OptionMessage;
};
export declare const TestDelay: {
    encode(message: TestDelay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestDelay;
    fromJSON(object: any): TestDelay;
    toJSON(message: TestDelay): unknown;
    create<I extends Exact<DeepPartial<TestDelay>, I>>(base?: I): TestDelay;
    fromPartial<I extends Exact<DeepPartial<TestDelay>, I>>(object: I): TestDelay;
};
export declare const PublicKey: {
    encode(message: PublicKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicKey;
    fromJSON(object: any): PublicKey;
    toJSON(message: PublicKey): unknown;
    create<I extends Exact<DeepPartial<PublicKey>, I>>(base?: I): PublicKey;
    fromPartial<I extends Exact<DeepPartial<PublicKey>, I>>(object: I): PublicKey;
};
export declare const SignedId: {
    encode(message: SignedId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedId;
    fromJSON(object: any): SignedId;
    toJSON(message: SignedId): unknown;
    create<I extends Exact<DeepPartial<SignedId>, I>>(base?: I): SignedId;
    fromPartial<I extends Exact<DeepPartial<SignedId>, I>>(object: I): SignedId;
};
export declare const AudioFormat: {
    encode(message: AudioFormat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AudioFormat;
    fromJSON(object: any): AudioFormat;
    toJSON(message: AudioFormat): unknown;
    create<I extends Exact<DeepPartial<AudioFormat>, I>>(base?: I): AudioFormat;
    fromPartial<I extends Exact<DeepPartial<AudioFormat>, I>>(object: I): AudioFormat;
};
export declare const AudioFrame: {
    encode(message: AudioFrame, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AudioFrame;
    fromJSON(object: any): AudioFrame;
    toJSON(message: AudioFrame): unknown;
    create<I extends Exact<DeepPartial<AudioFrame>, I>>(base?: I): AudioFrame;
    fromPartial<I extends Exact<DeepPartial<AudioFrame>, I>>(object: I): AudioFrame;
};
export declare const MessageBox: {
    encode(message: MessageBox, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageBox;
    fromJSON(object: any): MessageBox;
    toJSON(message: MessageBox): unknown;
    create<I extends Exact<DeepPartial<MessageBox>, I>>(base?: I): MessageBox;
    fromPartial<I extends Exact<DeepPartial<MessageBox>, I>>(object: I): MessageBox;
};
export declare const BackNotification: {
    encode(message: BackNotification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BackNotification;
    fromJSON(object: any): BackNotification;
    toJSON(message: BackNotification): unknown;
    create<I extends Exact<DeepPartial<BackNotification>, I>>(base?: I): BackNotification;
    fromPartial<I extends Exact<DeepPartial<BackNotification>, I>>(object: I): BackNotification;
};
export declare const ElevationRequestWithLogon: {
    encode(message: ElevationRequestWithLogon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ElevationRequestWithLogon;
    fromJSON(object: any): ElevationRequestWithLogon;
    toJSON(message: ElevationRequestWithLogon): unknown;
    create<I extends Exact<DeepPartial<ElevationRequestWithLogon>, I>>(base?: I): ElevationRequestWithLogon;
    fromPartial<I extends Exact<DeepPartial<ElevationRequestWithLogon>, I>>(object: I): ElevationRequestWithLogon;
};
export declare const ElevationRequest: {
    encode(message: ElevationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ElevationRequest;
    fromJSON(object: any): ElevationRequest;
    toJSON(message: ElevationRequest): unknown;
    create<I extends Exact<DeepPartial<ElevationRequest>, I>>(base?: I): ElevationRequest;
    fromPartial<I extends Exact<DeepPartial<ElevationRequest>, I>>(object: I): ElevationRequest;
};
export declare const SwitchSidesRequest: {
    encode(message: SwitchSidesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwitchSidesRequest;
    fromJSON(object: any): SwitchSidesRequest;
    toJSON(message: SwitchSidesRequest): unknown;
    create<I extends Exact<DeepPartial<SwitchSidesRequest>, I>>(base?: I): SwitchSidesRequest;
    fromPartial<I extends Exact<DeepPartial<SwitchSidesRequest>, I>>(object: I): SwitchSidesRequest;
};
export declare const SwitchSidesResponse: {
    encode(message: SwitchSidesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwitchSidesResponse;
    fromJSON(object: any): SwitchSidesResponse;
    toJSON(message: SwitchSidesResponse): unknown;
    create<I extends Exact<DeepPartial<SwitchSidesResponse>, I>>(base?: I): SwitchSidesResponse;
    fromPartial<I extends Exact<DeepPartial<SwitchSidesResponse>, I>>(object: I): SwitchSidesResponse;
};
export declare const SwitchBack: {
    encode(_: SwitchBack, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwitchBack;
    fromJSON(_: any): SwitchBack;
    toJSON(_: SwitchBack): unknown;
    create<I extends Exact<DeepPartial<SwitchBack>, I>>(base?: I): SwitchBack;
    fromPartial<I extends Exact<DeepPartial<SwitchBack>, I>>(_: I): SwitchBack;
};
export declare const PluginRequest: {
    encode(message: PluginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PluginRequest;
    fromJSON(object: any): PluginRequest;
    toJSON(message: PluginRequest): unknown;
    create<I extends Exact<DeepPartial<PluginRequest>, I>>(base?: I): PluginRequest;
    fromPartial<I extends Exact<DeepPartial<PluginRequest>, I>>(object: I): PluginRequest;
};
export declare const PluginFailure: {
    encode(message: PluginFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PluginFailure;
    fromJSON(object: any): PluginFailure;
    toJSON(message: PluginFailure): unknown;
    create<I extends Exact<DeepPartial<PluginFailure>, I>>(base?: I): PluginFailure;
    fromPartial<I extends Exact<DeepPartial<PluginFailure>, I>>(object: I): PluginFailure;
};
export declare const WindowsSessions: {
    encode(message: WindowsSessions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WindowsSessions;
    fromJSON(object: any): WindowsSessions;
    toJSON(message: WindowsSessions): unknown;
    create<I extends Exact<DeepPartial<WindowsSessions>, I>>(base?: I): WindowsSessions;
    fromPartial<I extends Exact<DeepPartial<WindowsSessions>, I>>(object: I): WindowsSessions;
};
export declare const MessageQuery: {
    encode(message: MessageQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageQuery;
    fromJSON(object: any): MessageQuery;
    toJSON(message: MessageQuery): unknown;
    create<I extends Exact<DeepPartial<MessageQuery>, I>>(base?: I): MessageQuery;
    fromPartial<I extends Exact<DeepPartial<MessageQuery>, I>>(object: I): MessageQuery;
};
export declare const Misc: {
    encode(message: Misc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misc;
    fromJSON(object: any): Misc;
    toJSON(message: Misc): unknown;
    create<I extends Exact<DeepPartial<Misc>, I>>(base?: I): Misc;
    fromPartial<I extends Exact<DeepPartial<Misc>, I>>(object: I): Misc;
};
export declare const VoiceCallRequest: {
    encode(message: VoiceCallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoiceCallRequest;
    fromJSON(object: any): VoiceCallRequest;
    toJSON(message: VoiceCallRequest): unknown;
    create<I extends Exact<DeepPartial<VoiceCallRequest>, I>>(base?: I): VoiceCallRequest;
    fromPartial<I extends Exact<DeepPartial<VoiceCallRequest>, I>>(object: I): VoiceCallRequest;
};
export declare const VoiceCallResponse: {
    encode(message: VoiceCallResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoiceCallResponse;
    fromJSON(object: any): VoiceCallResponse;
    toJSON(message: VoiceCallResponse): unknown;
    create<I extends Exact<DeepPartial<VoiceCallResponse>, I>>(base?: I): VoiceCallResponse;
    fromPartial<I extends Exact<DeepPartial<VoiceCallResponse>, I>>(object: I): VoiceCallResponse;
};
export declare const ScreenshotRequest: {
    encode(message: ScreenshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScreenshotRequest;
    fromJSON(object: any): ScreenshotRequest;
    toJSON(message: ScreenshotRequest): unknown;
    create<I extends Exact<DeepPartial<ScreenshotRequest>, I>>(base?: I): ScreenshotRequest;
    fromPartial<I extends Exact<DeepPartial<ScreenshotRequest>, I>>(object: I): ScreenshotRequest;
};
export declare const ScreenshotResponse: {
    encode(message: ScreenshotResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScreenshotResponse;
    fromJSON(object: any): ScreenshotResponse;
    toJSON(message: ScreenshotResponse): unknown;
    create<I extends Exact<DeepPartial<ScreenshotResponse>, I>>(base?: I): ScreenshotResponse;
    fromPartial<I extends Exact<DeepPartial<ScreenshotResponse>, I>>(object: I): ScreenshotResponse;
};
export declare const OpenTerminal: {
    encode(message: OpenTerminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenTerminal;
    fromJSON(object: any): OpenTerminal;
    toJSON(message: OpenTerminal): unknown;
    create<I extends Exact<DeepPartial<OpenTerminal>, I>>(base?: I): OpenTerminal;
    fromPartial<I extends Exact<DeepPartial<OpenTerminal>, I>>(object: I): OpenTerminal;
};
export declare const ResizeTerminal: {
    encode(message: ResizeTerminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResizeTerminal;
    fromJSON(object: any): ResizeTerminal;
    toJSON(message: ResizeTerminal): unknown;
    create<I extends Exact<DeepPartial<ResizeTerminal>, I>>(base?: I): ResizeTerminal;
    fromPartial<I extends Exact<DeepPartial<ResizeTerminal>, I>>(object: I): ResizeTerminal;
};
export declare const TerminalData: {
    encode(message: TerminalData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TerminalData;
    fromJSON(object: any): TerminalData;
    toJSON(message: TerminalData): unknown;
    create<I extends Exact<DeepPartial<TerminalData>, I>>(base?: I): TerminalData;
    fromPartial<I extends Exact<DeepPartial<TerminalData>, I>>(object: I): TerminalData;
};
export declare const CloseTerminal: {
    encode(message: CloseTerminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CloseTerminal;
    fromJSON(object: any): CloseTerminal;
    toJSON(message: CloseTerminal): unknown;
    create<I extends Exact<DeepPartial<CloseTerminal>, I>>(base?: I): CloseTerminal;
    fromPartial<I extends Exact<DeepPartial<CloseTerminal>, I>>(object: I): CloseTerminal;
};
export declare const TerminalAction: {
    encode(message: TerminalAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TerminalAction;
    fromJSON(object: any): TerminalAction;
    toJSON(message: TerminalAction): unknown;
    create<I extends Exact<DeepPartial<TerminalAction>, I>>(base?: I): TerminalAction;
    fromPartial<I extends Exact<DeepPartial<TerminalAction>, I>>(object: I): TerminalAction;
};
export declare const TerminalOpened: {
    encode(message: TerminalOpened, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TerminalOpened;
    fromJSON(object: any): TerminalOpened;
    toJSON(message: TerminalOpened): unknown;
    create<I extends Exact<DeepPartial<TerminalOpened>, I>>(base?: I): TerminalOpened;
    fromPartial<I extends Exact<DeepPartial<TerminalOpened>, I>>(object: I): TerminalOpened;
};
export declare const TerminalClosed: {
    encode(message: TerminalClosed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TerminalClosed;
    fromJSON(object: any): TerminalClosed;
    toJSON(message: TerminalClosed): unknown;
    create<I extends Exact<DeepPartial<TerminalClosed>, I>>(base?: I): TerminalClosed;
    fromPartial<I extends Exact<DeepPartial<TerminalClosed>, I>>(object: I): TerminalClosed;
};
export declare const TerminalError: {
    encode(message: TerminalError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TerminalError;
    fromJSON(object: any): TerminalError;
    toJSON(message: TerminalError): unknown;
    create<I extends Exact<DeepPartial<TerminalError>, I>>(base?: I): TerminalError;
    fromPartial<I extends Exact<DeepPartial<TerminalError>, I>>(object: I): TerminalError;
};
export declare const TerminalResponse: {
    encode(message: TerminalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TerminalResponse;
    fromJSON(object: any): TerminalResponse;
    toJSON(message: TerminalResponse): unknown;
    create<I extends Exact<DeepPartial<TerminalResponse>, I>>(base?: I): TerminalResponse;
    fromPartial<I extends Exact<DeepPartial<TerminalResponse>, I>>(object: I): TerminalResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message;
    fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message;
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
//# sourceMappingURL=message.d.ts.map